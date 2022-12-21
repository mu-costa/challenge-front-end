import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";
import { fetchDataUsers } from '../services/requests';
import '../css/Home.css'

const Home = () => {
    const [data, setData] = useState([]);
    let [page, setPage] = useState(0);

    useEffect(() => {
        fetchDataUsers(page).then((data)=> setData(data))
        .catch((AxiosError) => console.log(AxiosError));
        console.log(data);
    }, [page]);


    return(<>
    <Header />
        <main className="wrapper">
        <Table data={data} />
        <div className="buttons">
        <button 
            type="button"
            onClick={() => page >= 10 ? setPage(page -=10) : null }
        >
            Voltar
        </button>
        <button
            type="button"
            onClick={() => setPage(page += 10)}
        >
           Próximo
            </button>
        </div>
        </main>
    <Footer />
    </>)
}

export default Home;
