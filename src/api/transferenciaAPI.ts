import axios from "axios";
import Transferencia from "../types/transferencia";

export const transferenciaAPI = {
  fetchTransactions: async () => {
    return axios.get("http://localhost:8080/api/transferencias/listar/search/")
      .then(response => {
        const transferencias = response.data as Transferencia[];
        return transferencias;
      })
      .catch(error => {
        console.log('Error:', error);
        throw error;
      });
  },
  fetchTransactionsBetweenDate: async (d1: string, d2: string) => {
    return axios.get(`http://localhost:8080/api/transferencias/listar/search/?startDate=${d1}&endDate=${d2}`)
      .then(response => {
        const transferencias = response.data as Transferencia[];
        return transferencias;
      })
      .catch(error => {
        console.log('Error:', error);
        throw error;
      });
  },
  fetchTransactionsByNomeOperador: async(nome : string) =>{
   
    
    return axios.get(`http://localhost:8080/api/transferencias/listar/search/?nome=${nome}`)
    .then(response => {
      const transferencias = response.data as Transferencia[];
      console.log(transferencias);
      return transferencias;
    })
    .catch(error => {
      console.log('Error:', error);
      throw error;
    })
  }
}