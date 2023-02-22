import React from 'react'
import '../css/vet.css'

const MeetPet = ({petName,owner,date,hour,detail,deleteFunc}) => {

  return (
    <article className='vet-meet add-meeting text-light vet-shadow'>
        <header className='p-3 d-flex align-items-center gap-2'>
            <div className='vet-meet__avatar'>
                {/* <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt="" /> */}
                <img src="https://thumbs.dreamstime.com/b/smiley-face-pixel-art-white-background-163773129.jpg" alt="meet-img" />
            </div>
            <div className=''>
                <h6 className='m-0'>Pet: <span className="text-muted">{petName}</span></h6>
                <p className='m-0'>Owner: <span className='text-muted'>{owner}</span></p>
            </div>
        </header>
        <main className=''>
            <div className='add-meeting__inputs'>
                <label htmlFor="">Date:</label>
                <input type="date" defaultValue={date} disabled className='text-muted' />
            </div>
            <div className='add-meeting__inputs'>
                <label htmlFor="">Hour:</label>
                <input type="time" defaultValue={hour} disabled className='text-muted' />
            </div>
            <div className='add-meeting__inputs'>
                <label htmlFor="">Details:</label>
                <input type="text" defaultValue={detail} disabled className='text-muted' />
            </div>
        </main>
        <footer className='p-3 pb-4 text-end'>
            <button className="btn btn-danger btn-vet vet-shadow px-4" onClick={deleteFunc}>Delete</button>
        </footer>
    </article>
  )
}

export default MeetPet