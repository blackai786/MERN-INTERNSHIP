/* eslint-disable no-unused-vars */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css'
import { FooterComponent } from './component/FooterComponent';
import ContentComponent from './component/ContentComponent';
import { HeaderComponent } from './component/HeaderComponent';
import { HeaderComponent1 } from './component/HeaderComponent1';
import { Home } from './component/Home';
import { MapDemo1 } from './component/MapDemo1';
import { MapDemo2 } from './component/MapDemo2';
import { MapDemo3 } from './component/MapDemo3';
import { MapDemo4 } from './component/MapDemo4';
import { MapDemo5 } from './component/MapDemo5';
import { MapDemo6 } from './component/MapDemo6';
import { MapDemo7 } from './component/MapDemo7';
import { MapDemo8 } from './component/MapDemo8';
import { MapDemo9 } from './component/MapDemo9';
import { MapDemo10 } from './component/MapDemo10';
import { Navbar } from './component/Navbar';
import { Routes,Route } from 'react-router-dom';
import { Error } from './component/Error';
import { Movies } from './component/Movies';
import { Watch } from './component/Watch';
import { Shows } from './component/Shows';
import { Details } from './component/Details';
import { IplTeams } from './component/IplTeams';
import { FunctionDemo1 } from './component/FunctionDemo1';
import { UseStateDemo1 } from './component/UseStateDemo1';
import { UseStateDemo2 } from './component/UseStateDemo2';
import { UseStateDemo3 } from './component/UseStateDemo3';
import { Leaderboard } from './component/Leaderboard';
import { Employees } from './component/Employees';
import { FormDemo1 } from './component/Forms/FormDemo1';
import { Form2 } from './component/Forms/Form2';
import { Form3 } from './component/Forms/Form3';
import { Country } from './component/Country';
import { DisplayInput } from './component/input/DisplayInput';
import { PgUser } from './component/Forms/PgUser';
import { LoginForm } from './component/Forms/LoginForm';

function App() {
  return (
          <div>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/mangastore' element={<MapDemo6/>}/>
              <Route path='/portfolio' element={<ContentComponent/>}/>
              <Route path='/demo1' element={<MapDemo1/>}/>
              <Route path='/demo2' element={<MapDemo2/>}/>
              <Route path='/demo3' element={<MapDemo3/>}/>
              <Route path='/demo4' element={<MapDemo4/>}/>
              <Route path='/demo5' element={<MapDemo5/>}/>
              <Route path='/demo7' element={<MapDemo7/>}/>
              <Route path='/demo8' element={<MapDemo8/>}/>
              <Route path='/demo9' element={<MapDemo9/>}/>
              <Route path='/demo10' element={<MapDemo10/>}/>
              <Route path='/*' element={<Error/>}></Route>
              <Route path='/movies' element={<Movies/>}/>
              <Route path='/watch/:name' element={<Watch/>}/>
              <Route path="/shows" element={<Shows/>}/>
              <Route path="/details/:name" element={<Details/>}/>
              <Route path='/iplteams' element={<IplTeams/>}/>
              <Route path="/functiondemo1" element={<FunctionDemo1/>}/>
              <Route path="/usestatedemo1" element={<UseStateDemo1/>}/>
              <Route path="/usestatedemo2" element={<UseStateDemo2/>}/>
              <Route path="/usestatedemo3" element={<UseStateDemo3/>}/>
              <Route path="/leaderboard" element={<Leaderboard/>}/>
              <Route path="/employee" element={<Employees/>}/>
              <Route path="/formdemo1" element={<FormDemo1/>}/>
              <Route path="/form2" element={<Form2/>}/>
              <Route path="/form3" element={<Form3/>}/>
              <Route path="/country" element={<Country/>}/>
              <Route path="/displayinput" element={<DisplayInput/>}/>
              <Route path="/pguser" element={<PgUser/>}/>
              <Route path="/login" element={<LoginForm/>}/>
            </Routes>

          </div>
  )
}

export default App