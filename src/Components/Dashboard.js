import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'

const getLocalTodo = () => {
  let items = localStorage.getItem('TODO')

  if (items) {
    return JSON.parse(localStorage.getItem('TODO'))
  }
  else {
    return [];
  }
}

const getLocalUser = () => {
  let un = localStorage.getItem('localUser')

  if (un) {
    return localStorage.getItem('localUser')
  }
  else {
    return "";
  }
}

// localStorage.clear()
export default function Dashboard() {

  const [time, setTime] = useState(new Date())
  const [tasks, setTasks] = useState(getLocalTodo())
  const [input, setInput] = useState("")
  const [taskInput, setTaskInput] = useState("")
  const [user, setUser] = useState(getLocalUser())
  const [message, setMessage] = useState("")
  const [showUpdt, setShowUpdt] = useState(false)

  const { dark } = useContext(AppContext)

  setInterval(() => {
    setTime(new Date())
  }, 1000)

  const filtered = (id) => {
    let newItems = tasks.filter((ele) => {
      return ele.id !== id;
    })

    setTasks(newItems);
  }


  const showAlert = () => {
    document.querySelector('.msg') && document.querySelector('.msg').classList.remove('hidden')
    let timer = setTimeout(() => {
      document.querySelector('.msg') && document.querySelector('.msg').classList.add('hidden')
    }, 500)

    return (() => {
      clearTimeout(timer)
    })

  }
  useEffect(() => {
    showAlert();

  }, [tasks, user])

  useEffect(() => {
    localStorage.setItem('TODO', JSON.stringify(tasks))

  }, [tasks])
  // useEffect(() => {
  //   document.querySelector('.msg').classList.remove('hidden')
  //   setTimeout(() => {
  //     document.querySelector('.msg').classList.add('hidden')

  //   }, 2000)

  // }, [tasks])

  useEffect(() => {
    localStorage.setItem('localUser', user)
  }, [user])

  if (!localStorage.getItem('localUser')) {
    localStorage.setItem('localUser', "")
  }

  // localStorage.clear();
  const handleLocalStorage = (key) => {
    localStorage.setItem('localUser', key)
  }
  const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const setWish = () => {
    if (time.getHours() < 12) {
      return ("Good Morning")
    }
    else if (time.getHours() >= 12 && time.getHours() < 18) {
      return ("Good Afternoon")
    }
    else {
      return ("Good Evening")
    }
  }


  // localStorage.clear()
  return (
    <>



      {
        localStorage.getItem('localUser').trim().length === 0 ? // ternary operator

          <form className='flex gap-12 items-center justify-center max-w-5xl my-24 mx-auto flex-col' action=""
            onSubmit={(e) => {
              e.preventDefault();
              setUser(input);
              handleLocalStorage(user);

            }}>
            {/* Get Name of the User */}

            <h1 className={`text-3xl text-center md:text-5xl`}>We just need your name to get Started :)</h1>

            <div className="inputs flex flex-col gap-4 justify-center mx-8 md:mx-0 max-w-[85vw] md:max-w-sm">
              <input type='text' value={input}
                onChange={(e) => setInput(e.target.value)} autoFocus className={`px-12 text-2xl py-2 focus:outline-none rounded-lg `} />
              <input type="submit" value="Submit&rarr;" className='themebg text-2xl py-2 rounded-lg text-black cursor-pointer' />
            </div>

          </form >

          :   // ternary operator

          <>
            <div className={`flex flex-col lg:flex-row justify-start`}>

              <section className="left py-10 lg:w-[50vw]">
                <div className={`mx-4 sm:mx-16 lg:mx-24 flex flex-col items-start gap-10`}>

                  <div className="top break-word">
                    <h1 className='text-3xl'>{`${setWish()}, ${localStorage.getItem('localUser')}`}</h1>
                    <h1 className='text-2xl text-gray-500 font-bold'>What will you accomplish today?</h1>
                  </div>


                  <div className="time flex items-center gap-20">
                    <div className="date flex flex-col items-center max-w-auto">
                      <p>{days[time.getDay() - 1]}</p>
                      <p className='text-4xl theme'>{time.getDate()}</p>
                      <p>{months[time.getMonth()]}</p>
                    </div>

                    <div className="time">
                      <p className='text-2xl'>
                        {`${time.getHours() < 10 ? '0' + time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}:${time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()}`}
                      </p>
                    </div>
                  </div>

                  <div className="tasks flex flex-col gap-8 items-start">
                    <p className='text-2xl'>Add your Tasks !</p>

                    <form action="" className='flex gap-2 items-stretch'
                      onSubmit={(event) => {
                        // let input = document.querySelector('input')
                        event.preventDefault();

                        const all_Data = { id: new Date().getTime().toString(), name: taskInput }
                        console.log(all_Data);

                        taskInput.trim().length !== 0 && setTasks([...tasks, all_Data]);
                        taskInput.trim().length !== 0 && setMessage("Success !!");
                        // taskInput.trim().length !== 0 && 
                        setTaskInput("")
                      }}>
                      <input type="text" value={taskInput} onChange={(e) => {
                        setTaskInput(e.target.value)
                      }} placeholder='Add Task' autoFocus className='relative border-2 border-gray-800 outline-none text-xl px-3 py-1 rounded-lg w-full bg-transparent' />
                      <input type='submit' value={'+'} className='themebg text-4xl px-3 rounded-lg text-black cursor-pointer' />
                    </form>

                    <div className='themebg text-xl px-3 py-[5px] rounded-lg text-black cursor-pointer flex gap-2'
                      onClick={() => {
                        tasks.length !== 0 && setTasks([]);
                        tasks.length !== 0 && setMessage("Deleted !!")

                      }}>
                      <i className='bx bxs-trash text-xl cursor-pointer'></i>
                      <p>Delete All</p>
                    </div>
                    
                  </div>
                </div>
              </section>

              <section className={`right lg:w-[50vw] py-10 gap-2 flex ${tasks.length !== 0 ? 'justify-start' : 'justify-center'} items-center flex-col`}>
                {

                  tasks.length !== 0 ? // ternary operator

                    tasks.map((item) => {

                      let status = localStorage.getItem(`checked?${item.id}`)
                     
                      if (status) {
                        // document.getElementById(`${item.id}`).checked = status
                      }
                      // console.log(item);
                      return (
                        <div key={item.id} id={item.id} className={`${dark ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'} task-box flex w-[95vw] sm:w-[70vw] h-auto lg:w-[30vw] px-4 py-2 rounded-lg items-center justify-between`}>

                          <input type="checkbox" className='chbx' name="done" id={item.id} onClick={() => {
                            let ch = document.getElementById(`${item.id}`)
                            if(!ch.checked){
                               localStorage.setItem(`checked?${item.id}`, ch.checked)
                            }

                          }} />

                          <label htmlFor={item.id} className='text-2xl break-none overflow-x-scroll w-full h-full pl-3'><h1>{item.name}</h1></label>

                          <div className="icons flex gap-4 pl-3">
                            <i className='bx bx-edit theme text-xl cursor-pointer'
                              onClick={() => {

                              }}></i>
                            <i className='bx bxs-trash theme text-xl cursor-pointer'
                              onClick={() => {
                                
                                document.getElementById(item.id).style.animation = "animate 0.5s infinite linear" ;

                                setTimeout(()=>{
                                  filtered(item.id);
                                  setMessage("Deleted !!");
                                },500)

                              }}></i>
                          </div>
                        </div>
                      )
                    })
                    :  // ternary operator

                    <div className={`mx-8 md:mx-auto text-xl px-12 py-2 rounded-lg self-center`}>
                      <h2>No pending work in your toDo :)</h2>
                    </div>

                }
              </section>

            </div>

            <span className={`msg hidden text-black ${message === "Success !!" ? 'bg-green-600' : 'bg-red-600'} rounded-lg text-xl ${message.trim().length !== 0 ? 'px-5 py-2' : ''} absolute top-20 right-8`}>{message}</span>

            {/* Update Username */}

            <div className="changeUsername py-12 md:mx-24 max-w-xs mx-auto md:items-start gap-4 justify-center flex flex-col">
              <button className={`text-sm underline underline-offset-4`} onClick={() => setShowUpdt(!showUpdt)}>Change Username ?</button>

              {

                showUpdt &&

                <form className="update flex gap-2 md:gap-1 flex-col md:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    input.trim().length !== 0 && setUser(input);
                    setInput("")
                    input.trim().length !== 0 && setShowUpdt(!showUpdt)
                    setMessage("Success !!")
                    // localStorage.setItem('localUser' , user)
                  }}>
                  <input type="text" value={input} className={`${dark ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'} px-4 text-sm py-1 focus:outline-none rounded `}
                    onChange={(e) => {
                      setInput(e.target.value)
                    }} />
                  <input type="submit" value="Update &rarr;" className='themebg text-sm py-1 px-2 rounded text-black cursor-pointer' />
                </form>

              }
            </div>
          </>
      }
    </>
  )
}

// manager admini
// name
// emial
// phone