const Table = (kategori) => {
    console.log(kategori);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nama</th>
                    </tr>
                </thead>
                <tbody>
                    {kategori.kategori.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{data.nama}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
