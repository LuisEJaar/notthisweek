
import React from 'react'
import { useFormik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'

export default function DeleteEncounter({target, encounterId, setRedirectURL, setShouldRedirect}) {
  const targetUrl = `https://notthisweek.herokuapp.com/api/encounter/deleteEncounter/${encounterId}`

  const navigate = useNavigate()

  //Formik items
  const formik = useFormik({
    onSubmit: () => {
      fetch(targetUrl, {
        method: 'delete',
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          console.log(data.err)
        } else { 
          console.log(`Delete workflow:`, data)
          console.log(`Redirect:`, data?.redirect)
          navigate(data?.redirect, {replace: true})
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  })

  return (
    <div className="modal fade" id={`delete${target}`} tabIndex="-1" aria-labelledby={`delete${target}Label`} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="deleteEncounterLabel">Warning!</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            { target } deletion cannot be undone, you're condemning this moment to fantasy death!
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <Form
            onSubmit={formik.handleSubmit}
          >
            <button className="btn btn-danger" data-bs-dismiss="modal" type="submit">Do it</button>
          </Form>
        </div>
      </div>
    </div>
  </div>
  )
}