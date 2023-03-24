
import People from '../assets/SVG/people.svg'
import Species from '../assets/SVG/species.svg'
import Starships from '../assets/SVG/starships.svg' 
import Films from '../assets/SVG/films.svg'

export const handleOverviewIcon = (data) =>{
    switch(data){
        case 'starships':
            return Starships;
        case 'people':
            return People;
        case 'species':
            return Species;
        case 'films':
            return Films;
        default:
            return Films; 
    }
}