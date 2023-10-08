import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const lodaerData = useLoaderData();
    const { id } = useParams()
    const intId = parseInt(id)
    const detailes = lodaerData.find(item => item.id === intId)
    const { title } = detailes;
    console.log(title);
    return (
        <div>
            
            <h2></h2>
        </div>
    );
};

export default ServiceDetails;