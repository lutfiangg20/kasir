import Table from "@/Components/Toko/kategori/Table";
import { Sidebar } from "@/Layouts/Sidebar";
import { useState } from "react";
import { router } from "@inertiajs/react";
const Kategori = ({ kategori }) => {
    const [nama, setNama] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        router.post("/kategori/store", {
            nama: nama,
        });
    };
    return (
        <div className="flex">
            <Sidebar />
            <div className="p-4">
                <h1 className="font-bold text-2xl">Kategori</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-4">
                        <input
                            onChange={(e) => setNama(e.target.value)}
                            value={nama}
                            type="text"
                            placeholder="Type here"
                            className="input input-sm input-bordered input-success w-full"
                        />
                        <button className="btn btn-sm btn-success text-white">
                            Tambah
                        </button>
                    </div>
                </form>

                <Table kategori={kategori} />
            </div>
        </div>
    );
};

export default Kategori;
