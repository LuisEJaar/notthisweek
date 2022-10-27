import React from 'react'
import TextInput from '../FormComponents/TextInput'
import NumberInput from '../FormComponents/NumberInput'
import CheckInput from '../FormComponents/CheckInput'
import {Formik} from 'formik'

export default function CharacterCreation() {

  const actionUrl = `/api/character/create`

  return (
  <div className="modal fade" id="createCharacter" tabIndex="-1" aria-labelledby="createCharacterLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createCharacterLabel">Tell me about yourself traveler</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <Formik
              initialValues={{
                file: "",
                
                name: "",
                class: "",
                age: "",
                race: "",
                gender: "",
                lvl: "",
                ac: "",

                str: "",
                dex: "",
                con: "",
                int: "",
                wis: "",
                char: "",

                strSave: "",
                dexSave: "",
                conSave: "",
                intSave: "",
                wisSave: "",
                charSave: "",

                acrobatics: "",
                animalHandling: "",
                arcana: "",
                athletics: "",
                deception: "",
                history: "",
                insight: "",
                intimidation: "",
                investigation: "",
                medicine: "",
                nature: "",
                perception: "",
                performance: "",
                persuasion: "",
                religion: "",
                sleightOfHand: "",
                stealth: "",
                survival: "",
              }}
              onSubmit={ (values) => {
                  fetch(actionUrl, {
                    method: 'post',
                    encType: "multipart/form-data",
                  })
                    .then((res) => res.json())
                    // .then((data) => setRounds(data.rounds))
                    // .then(sendMessage("rounds"))
                    .catch((err) => {
                      console.log(err)
                    })
                }} 
            >
              {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  isSubmitting,
                  props
                }) => (
                <form
                  onSubmit={handleSubmit}
                >
                  <fieldset>
                    
                    <div className="mt-2">
                        <label htmlFor="imgUpload" className="form-label">Image</label>
                        <input type="file" className="form-control" id="imageUpload" name="file" required/>
                    </div>
                    
                    <legend className='mt-3'>Description:</legend>
                    <TextInput  id="charName" text="Name:" name="name" placeholder="Name" required/>
                    <TextInput  id="charClass" text="Class:" name="class" placeholder="Class" required/>
                    <NumberInput  id="charAge" text="Age:" name="age" placeholder="Age" />
                    <TextInput  id="charRace" text="Race:" name="race" placeholder="Race" required />
                    <TextInput  id="charGnd" text="Gender:" name="gender" placeholder="Gender" required />
                    <NumberInput  id="charLvl" text="Level:" name="lvl" placeholder="Level" required/>
                    <NumberInput  id="ac" text="Armor Class(ac):" name="ac" placeholder="Armor Class" required/>
                  </fieldset>
                    
                  <fieldset className="mt-3">
                  <legend>Ability Scores</legend>
                    <NumberInput  id="str" text="Strength:" name="str" placeholder="str" min="0" max="30" required/>
                    <NumberInput  id="dex" text="Dexterity:" name="dex" placeholder="dex" min="0" max="30" required/>
                    <NumberInput  id="con" text="Constitution:" name="con" placeholder="con" min="0" max="30" required />
                    <NumberInput  id="int" text="Intelligence:" name="int" placeholder="int" min="0" max="30" required/>
                    <NumberInput  id="wis" text="Wisdom:" name="wis" placeholder="wis" min="0" max="30" required/>
                    <NumberInput  id="char" text="Charisma:" name="char" placeholder="char" min="0" max="30" required/>
                  </fieldset>

                  <fieldset className="mt-3">
                    <legend>Save Proficiences:</legend>
                    <CheckInput setFieldValue={setFieldValue}  name="strSave" id="strSave" text="str" />
                    <CheckInput setFieldValue={setFieldValue} name="dexSave" id="dexSave" text="dex" />
                    <CheckInput setFieldValue={setFieldValue} name="conSave" id="conSave" text="con" />
                    <CheckInput setFieldValue={setFieldValue} name="intSave" id="intSave" text="int" />
                    <CheckInput setFieldValue={setFieldValue} name="wisSave" id="wisSave" text="wis" />
                    <CheckInput setFieldValue={setFieldValue} name="charSave" id="charSave" text="char" />
                  </fieldset>

                  <fieldset className="mt-3">
                    <legend>Proficiences:</legend>
                      <CheckInput setFieldValue={setFieldValue} name="acrobatics" id="acrobatics" text="Acrobatics" />
                      <CheckInput setFieldValue={setFieldValue} name="animalHandling" id="AnimalHandling" text="AnimalHandling" />
                      <CheckInput setFieldValue={setFieldValue} name="arcana" id="arcana" text="Arcana" />
                      <CheckInput setFieldValue={setFieldValue} name="athletics" id="athletics" text="Athletics" />
                      <CheckInput setFieldValue={setFieldValue} name="deception" id="deception" text="Deception" />
                      <CheckInput setFieldValue={setFieldValue} name="history" id="history" text="History" />
                      <CheckInput setFieldValue={setFieldValue} name="insight" id="insight" text="Insight" />
                      <CheckInput setFieldValue={setFieldValue} name="intimidation" id="intimidation" text="Intimidation" />
                      <CheckInput setFieldValue={setFieldValue} name="investigation" id="investigation" text="Investigation" />
                      <CheckInput setFieldValue={setFieldValue} name="medicine" id="medicine" text="Medicine" />
                      <CheckInput setFieldValue={setFieldValue} name="nature" id="nature" text="Nature" />
                      <CheckInput setFieldValue={setFieldValue} name="perception" id="perception" text="Perception" />
                      <CheckInput setFieldValue={setFieldValue} name="performance" id="performance" text="Performance" />
                      <CheckInput setFieldValue={setFieldValue} name="persuasion" id="persuasion" text="Persuasion" />
                      <CheckInput setFieldValue={setFieldValue} name="religion" id="religion" text="Religion" />
                      <CheckInput setFieldValue={setFieldValue} name="sleightOfHand" id="sleightOfHand" text="SleightOfHand" />
                      <CheckInput setFieldValue={setFieldValue} name="stealth" id="stealth" text="Stealth" />
                      <CheckInput setFieldValue={setFieldValue} name="survival" id="survival" text="Survival" />
                  </fieldset>

                  <div className="d-flex flex-column">
                    <button className="btn btn-success mt-5" type="submit">Adventure awaits</button>
                  </div>
                  </form>
              )}
            </Formik>
            </div>
          </div>
        </div>
      </div>
  )
}

