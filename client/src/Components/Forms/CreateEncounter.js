import React from 'react'
import { Formik, Field} from 'formik'
import TextInput from '../FormComponents/TextInput'

function CreateEncounter({ data, characters, post, encounters, setEncounters }) {

  const actionUrl = `https://notthisweek.herokuapp.com/api/encounter/createEncounter/${post._id}`

  return (
    <div className="modal fade" id="addEncounter" tabIndex="-1" aria-labelledby="addEncounterLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="newEncounterLabel">New Encounter</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <Formik
                initialValues={{
                  encounters: encounters,
                  title: "",
                  location: "",
                  description: "",
                  characters: [],
                }}
                onSubmit={(values) => {
                  let formData = new FormData();
                  formData.append("file", values.file);
                  formData.append("title", values.title);
                  formData.append("location", values.location);
                  formData.append("description", values.description);
                  formData.append("characters", values.characters);

                  fetch(actionUrl, {
                    method: 'post',
                    encType: "multipart/form-data",
                    withCredentials: true,
                    body: formData,
                  })
                  .then((res) => res.json())
                  .then((data) => setEncounters(data.encounters))
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
                {/* <!-- Title --> */}
                <TextInput className="mb-3" handleChange={handleChange} value={values.title} id="encounterTitle" text="Title:" name="title" placeholder="Enounter Title" required/>
                
                {/* <!-- Location --> */}
                <TextInput
                  className="mb-3"
                  handleChange={handleChange}
                  value={values.location}
                  id="encounterLocation"
                  text="Encounter Location:"
                  name="location"
                  placeholder="Enounter Location"
                  required
                />
                
                {/* <!-- Description --> */}
                <label className='mb-1 mt-2' htmlFor="encounterDescription" aria-label='Description'>Description:</label>
                <Field
                    as="textarea"
                    onChange={handleChange}
                    value={values.caption}
                    className="mb-3 form-control"
                    id="encounterDescription"
                    placeholder="Encounter Description"
                    name="description"
                    label="Description:"
                >
                </Field>
                {/* <!-- Image --> */}
                <div className="mb-3">
                  <label htmlFor="imgUpload" className="form-label">Image</label>
                  <input type="file" onChange={ (e)=> setFieldValue("file", e.currentTarget.files[0]) } className="form-control" id="imageUpload" name="file" required/>
                </div>
                {/* <!-- Players --> */}
                <label className="mb-3">Party Members:</label>                 
                {data.characters.length > 0 &&
                  <>
                    {
                      data.characters.map(character => {
                        return (
                          <div class="form-check">
                            <Field
                              key={character._id}
                              type="checkbox"
                              value={character._id}
                              name="characters"
                              id={ character._id }
                            />
                            <label className='ps-2' for={ character._id }>{`${character.name}`}</label>
                          </div>
                        )
                      })
                    }
                  </>
                }
                {characters.length === 0 &&
                  <span>No player characters available</span>
                  }
                <button type="submit" data-bs-dismiss="modal" className="btn btn-primary" value="Upload">Create Encounter</button>
                </form>
              )}
            </Formik>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CreateEncounter
