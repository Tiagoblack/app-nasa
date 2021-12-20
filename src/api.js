export default {
    getData: async()=>{
        let  url = `api_key=unct9EBsqvh1ZnGAUyyqNcBcjNd5wC8cBs7UESTV`;
        const date = await fetch(`https://api.nasa.gov/planetary/apod?${url}&count=100`);
        const json = date.json();
        
        return json;

    },
}