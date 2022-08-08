import axios from "axios";

const phrasesService = () => {
  const getRandPhrase = async () => {
    const response = await axios.get('https://api.quotable.io/random').then(({ data }) => data);
    return response
  }

  return {
    getRandPhrase
  }
}

export default phrasesService