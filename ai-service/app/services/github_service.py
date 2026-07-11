from pathlib import Path
from urllib.parse import urlparse
from git import Repo
from git.exc import GitCommandError

TEMP_DIR = Path("temp")
TEMP_DIR.mkdir(exist_ok=True)


def extract_metadata(repo_url: str, clone_path: Path):
    parsed = urlparse(repo_url)

    path_parts = parsed.path.strip("/").replace(".git", "").split("/")

    owner = path_parts[0]
    repository_name = path_parts[1]

    return {
        "owner": owner,
        "repositoryName": repository_name,
        "branch": "main",
        "localPath": str(clone_path),
    }


def clone_repository(repository_id: str, repo_url: str):

    clone_path = TEMP_DIR / repository_id

    # Already cloned
    if clone_path.exists():

        metadata = extract_metadata(repo_url, clone_path)
        metadata["cached"] = True

        return metadata

    # First clone

    try:

        Repo.clone_from(repo_url, clone_path)

    except GitCommandError as e:
        raise Exception(f"Failed to clone repository.\n{e}")

    metadata = extract_metadata(repo_url, clone_path)
    metadata["cached"] = False

    return metadata