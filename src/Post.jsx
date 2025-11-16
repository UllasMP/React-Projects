import { useQuery } from '@tanstack/react-query'
import React from 'react'

function Post() {

  const { data, isLoading,isFetching, isError } = useQuery({
    queryKey: ["images"],
    queryFn: async () =>{
      console.log("Fetching the images from API...")
      const res= await fetch("https://picsum.photos/v2/list?page=2&limit=10")
      if(!res.ok) throw new Error("Network Response is not ok")
        return res.json()
      },
      staleTime:10000,
    });

  if (isLoading) return <p>🔃Loading images....</p>;
  if (isError) return <p>❌Error loading images....!</p>;

  return (
    <>
      <style>
        {`
        .images-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .image-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          text-align: center;
        }
        .image-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
        }
        .image-card p {
          margin-top: 8px;
          font-size: 14px;
          color: #444;
        }
      `}
      </style>
      
      <h2 style={{textAlign:'center'}}>Posts list 📃</h2>
      {isFetching && <p>
        Re-Fetching</p>}
      <div className="images-container">
        
        {data.map((img) => (
          <div className="image-card" key={img.id}>
            <img src={img.download_url} alt={img.author} />
            <p>{img.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Post;
