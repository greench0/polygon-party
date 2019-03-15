import React, { Component } from 'react';

export default class SignUp extends Component {
     state = {
     }

     render() {
          return (
               <div className="wrapper">



               <div className="row justify-content-center mx-auto">


                    <div className="card shadow p-3 mt-4">
                         <div id='signinContainer'>
                              <form id='form'>
                                   <input className='input' type="text" placeholder="First Name" />
                                   <input className='input' type="text" placeholder="Last Name" />
                                   <input className='input' type="text" placeholder="Email" />
                                   <input className='input' type="password" placeholder="Password" />
                                   <button id='submit'>Sign Up</button>
                              </form>
                         </div>
                         <div className="card-footer">thanks</div>

                    </div>


                    <div className="hidden">
                         <div id='boxes-holder' className='' data-spy="scroll"></div>
                    </div>

                    </div>

               </div>
          )
     }
}