import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../common/Button";
import Input from "../common/Input";
import { createRepository } from "../../api/repository.api";

function AddRepositoryModal({

    open,

    onClose,

    onSuccess,

}) {

    const [repoUrl, setRepoUrl] = useState("");

    const [loading, setLoading] = useState(false);

    if (!open) return null;

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setLoading(true);

            await createRepository({
                repoUrl,
            });

            toast.success("Repository added successfully");

            setRepoUrl("");

            onSuccess();

            onClose();

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Unable to add repository"

            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

            <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-8">

                <h2 className="text-2xl font-bold text-white">

                    Add GitHub Repository

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                >

                    <Input
                        label="Repository URL"
                        placeholder="https://github.com/owner/repository"
                        value={repoUrl}
                        onChange={(e)=>setRepoUrl(e.target.value)}
                    />

                    <div className="flex justify-end gap-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-slate-700 px-5 py-2 text-white"
                        >

                            Cancel

                        </button>

                        <Button
                            type="submit"
                            loading={loading}
                        >

                            Add Repository

                        </Button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddRepositoryModal;