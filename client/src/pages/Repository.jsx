import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";

import api from "../api/axios";

function Repository() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [repository, setRepository] = useState(null);
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([]);

    useEffect(() => {

        fetchRepository();

    }, []);

    async function fetchRepository() {

        const response = await api.get(`/repositories/${id}`);

        setRepository(response.data.data);

    }

    return (

        <DashboardLayout>

            <button
                onClick={() => navigate("/dashboard")}
                className="mb-6 flex items-center gap-2 text-cyan-400"
            >

                <ArrowLeft size={18} />

                Back

            </button>

            {

                repository && (

                    <div className="mb-6">

                        <h1 className="text-3xl font-bold text-white">

                            {repository.repoName}

                        </h1>

                        <p className="text-slate-400">

                            {repository.owner}

                        </p>

                    </div>

                )

            }

            <ChatWindow
                messages={messages}
            />

            <ChatInput
                repositoryId={id}
                setMessages={setMessages}
                loading={loading}
                setLoading={setLoading}
            />

        </DashboardLayout>

    );

}

export default Repository;