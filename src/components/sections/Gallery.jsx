
import { Link } from "react-router-dom"

export default function Gallery({datas}){

    // console.log(datas);
    
    return (
        <>
            <div className="container">
                <div className="py-5 my-5 row">
                    {
                        datas.map(function(data){
                            return(
                                <div key={data.id} className="mb-4 col-lg-3 col-md-6 col-sm-12">
                                    <Link>
                                        <div className="gallery_content">
                                            <div>
                                                <img src={data.img} style={
                                                    {
                                                        width : "100%",
                                                        height: "100%",
                                                        objectFit : "cover"
                                                    }
                                                } alt="" />
                                            </div>
                                            
                                            <div className="gallery_caption">
                                                <span>{data.caption}</span>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

