export const parseGithubUrl = (url) => {

    const regex =
      /^https:\/\/github\.com\/([^\/]+)\/([^\/]+?)(?:\.git)?\/?$/;
  
    const match = url.match(regex);
  
    if (!match) {
      throw new Error("Invalid GitHub URL");
    }
  
    return {
      owner: match[1],
      repoName: match[2],
    };
  };