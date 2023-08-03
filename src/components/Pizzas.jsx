import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Pizzas = () => {

    const { isLoading, error, data } = useQuery(['pizzas'], () => 
        makeRequest.get("/pizzas").then((res) => {
            return res.data;
        })
    )
             
console.log(data)

    return (
    <div>
        {data.map((pizza) => (
            <h1>{pizza.name}</h1>
        ))}
    </div>
    )
}