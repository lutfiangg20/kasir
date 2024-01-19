import { Stok } from "@/Components/Pembelian/Stok";
import { Sidebar } from "@/Layouts/Sidebar";

const Ecer = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="p-4 gap-4">
                <h1 className="font-bold text-2xl">Pembelian Ecer</h1>
                <div className="flex gap-2">
                    <button className="btn btn-primary btn-sm text-white">
                        Transaksi Ecer
                    </button>
                    <button className="btn btn-success btn-sm text-white">
                        Transaksi Penjual
                    </button>
                    <button className="btn btn-error btn-sm text-white">
                        Transaksi Bengkel
                    </button>
                </div>
                <Stok />
            </div>
        </div>
    );
};

export default Ecer;
