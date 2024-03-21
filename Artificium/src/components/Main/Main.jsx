import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = ()=>{

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);
    return(
        <div className="main">
            <div className="nav">
                <p>Artificium</p>
                <img className="img" src={assets.user_icon} alt=""/>
            </div>

            <div className="main-container">
                {!showResult
                ?<>

                <div className="greet">
                    <p><span> Hola! Creator.</span></p>
                    <p>Lets Go wild with Creativity</p>
                </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest Some Recepies with Rice</p>
                    <img className="img" src={assets.compass_icon} alt=""/>
                </div>

                <div className="card">
                    <p>Briefly summarise this concept: Urban Planning</p>
                    <img className="img" src={assets.bulb_icon} alt=""/>
                </div>

                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img className="img" src={assets.message_icon} alt=""/>
                </div>

                <div className="card">
                    <p>Imrpve the reaability of the following code</p>
                    <img className="img" src={assets.code_icon} alt=""/>
                </div>


            </div>


                </>

                :
                <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt=""/>
                        <p>Recent Prompt</p>
                    </div>

                    <div className="result-data">
                        <img src={assets.gemini_icon} alt=""/>
                        {loading
                        ?
                        <div className="loader">
                            <hr />
                            <hr />
                            <hr />

                        </div>
                        :<p dangerouslySetInnerHTML={{__html: resultData}}></p>
                        
                    }
                        

                    </div>

                </div>
    
                }
                
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your Crearivity Here Boss'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                
                <p className="bottom-info">
                    Artificium is not liable for any of its results
                    so users are requested to look for themselves:)))
                </p>
            </div>
            </div>
        </div>
    )
}

export default Main