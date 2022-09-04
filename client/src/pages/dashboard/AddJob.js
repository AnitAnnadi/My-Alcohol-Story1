import { FormRow, FormRowSelect, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    title,
    body,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !body ) {
      displayAlert()
      return
    }
    if (isEditing) {
      editJob()
      return
    }
    createJob()
  }
  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit story' : 'add story'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          {/* title */}
          <FormRow
            type='text'
            name='title'
            value={title}
            handleChange={handleJobInput}
          />
          {/* body */}
          <FormRow
            type='text'
            name='body'
            value={body}
            handleChange={handleJobInput}
          />
          {/* location */}
          {/* <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          /> */}
          {/* job status */}
          {/* <FormRowSelect
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          /> */}
          {/* job type */}
          {/* <FormRowSelect
            name='jobType'
            labelText='job type'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          /> */}
          {/* btn container */}
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              // disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
