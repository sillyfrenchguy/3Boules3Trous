import React from 'react';
import './BackOffice.css';
import { userList } from '../datas/userList'
import { prizesList } from '../datas/prizesList'
import ButtonAnimation from '../ButtonAnimation/index';
import Select from 'react-select'; 

export const BackOffice = ({prize, currentPrize, updatePrize, updateJackpot, selectedValueQuine, setSelectedValueQuine, selectedValueCarton, setSelectedValueCarton}) => {
  const inputKeyPress = (event) => {
    if (event.charCode === 13) {
      updateJackpot(event.target.value);
    }
  };
  const handleChangePrize = (e) => {
    updatePrize(e.value); 
  };

  const handleChangeQuine = (e) => {
    setSelectedValueQuine(Array.isArray(e) ? e.map(x => x.value) : []); 
  };
  const handleChangeCarton = (e) => {
    setSelectedValueCarton(Array.isArray(e) ? e.map(x => x.value) : []); 
  };

  return (
  <div id="backOffice">
    <h1> BackOffice </h1>
    <div className = "conteneur_Type">
      <h3>Définir le gros lot : </h3>
      <input type="number" onKeyPress={inputKeyPress} />
    </div>
    <div className = "conteneur_Type">
      <h3>Lot en jeu : </h3>
      <Select
        defaultValue={[]}
        isSearchable
        name="prizes"
        options={prizesList}
        classNamePrefix="select"
        value={prizesList.filter(obj => currentPrize.includes(obj.value))}
        onChange={handleChangePrize}
      /> 
    </div>
    <div className = "conteneur_Type">
      <h3>Joueurs ayant une quine :</h3>
      <Select
        defaultValue={[]}
        isMulti
        name="users"
        options={userList}
        className="basic-multi-select"
        classNamePrefix="select"
        value={userList.filter(obj => selectedValueQuine.includes(obj.value))}
        onChange={handleChangeQuine}
      /> 
    </div>
    <div className = "conteneur_Type">
      <h3>Joueurs ayant un carton plein :</h3>
      <Select
        defaultValue={[]}
        isMulti
        name="users"
        options={userList}
        className="basic-multi-select"
        classNamePrefix="select"
        value={userList.filter(obj => selectedValueCarton.includes(obj.value))}
        onChange={handleChangeCarton}
      /> 
    </div>
    <div className = "conteneur_Type">
      <h3>Animations :</h3>
      <ButtonAnimation type='NEW QUINE' titre = "Quine !" selectedValue={selectedValueQuine[selectedValueQuine.length - 1]} />
      <ButtonAnimation type='NEW CARTON' titre ="Carton plein !" selectedValue={selectedValueCarton[selectedValueCarton.length - 1]} />
    </div>
  </div>
)







    /*
    const inputKeyPress = (event) => {
      if (event.charCode === 13) {
        updateInputText([...inputText, event.target.value]);
      }
    };
  
    return (
      <div id="backOffice">
          <div>
            <h2>Le jouli Back Office</h2>
            <label>
                Quine :
                <input type="text" onKeyPress={inputKeyPress} />
            </label>
          </div>
      </div>
    );

    */
  };
  export default BackOffice;