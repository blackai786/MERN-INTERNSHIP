import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-darkblue bg-dark">
        <div style={{ color: "red", fontSize: "20px", fontStyle: "bold" }}>
          NETFLIX{" "}
        </div>
        <Link class="nav-link" to="/">
          Home{" "}
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/mangastore">
                Manga Store
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/demo1">
                Demo1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/demo2">
                Demo2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/demo3">
                Demo3
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/demo4">
                Demo4
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/demo5">
                Demo5
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/demo7">
                Demo7
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/demo8">
                Demo8
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/demo9">
                Demo9
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/demo10">
                Demo10
              </Link> 
            </li> */}
            <li class="nav-item active">
              <Link class="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/shows">
                Shows
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/iplteams">
                IPL Teams
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/functiondemo1">
                Function
              </Link>
            </li>
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo1">
                UseState1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo2">
                UseState2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo3">
                UseState3
              </Link>
            </li> */}
            <li class="nav-item active">
              <Link class="nav-link" to="/leaderboard">
                Leaderboard
              </Link>
              </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/employee">
                Employees
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo1">
                Form1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/form2">
                Player Form
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/form3">
                Ckeckout
              </Link>
              </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/country">
                Country
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/displayinput">
                Display
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/pguser">
                PgUser
              </Link>
              </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/login">
                Login Form
              </Link>
              </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};