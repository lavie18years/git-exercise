import { useParams } from 'react-router-dom'
import { Players } from '../Shared/ListOfPlayers'
export default function Detail() {
    const userName = useParams();
    const player = Players.find(obj => {
        return obj.id == userName.id;
    });

    return (
        <div className='container'>
            <div class='badge'>
                <h1>{player.name}</h1>
            </div>
            

                <div class="row">
                    <div class="image_player">
                        <img src={`../${player.img}`} alt='' />
                    </div>
                    <div class="product-details">
                        <div class="product-info">
                            <h2>{player.club}</h2>
                        </div>
                        <div class="product-info">
                            <h3>Maket Value: €{player.cost}</h3>
                        </div>
                        <div class="product-info">
                            <h5>{player.info}</h5>
                        </div>
                    </div>
                </div>

        </div>

    )
}