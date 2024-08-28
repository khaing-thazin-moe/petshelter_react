



export default function VideoIntro(){
    return (
        <>
            <div className="py-5 row justify-content-center">
                <div className="col-lg-7 col-md-10 col-sm-12">
                    <div className="rounded-3 overflow-hidden video_container">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ARA0AxrnHdM" title="Your Google Assistant: coming soon to smart displays" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    {/* start global caption */}
                    <div className="pt-3 text-center global_caption">
                        <h4 className="fw-semibold" style={{
                            fontSize: "17px"
                        }}>Watch this video how they live here</h4>
                        <p className="fw-light text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>
                    </div>
                    {/* end global caption */}
                </div>
                

            </div>
        </>
    )
}