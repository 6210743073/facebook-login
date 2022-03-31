import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Register = ({ showRegister, setshowRegister }) => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateofbirth, setDateofbirth] = useState([]);
  const [gender, setGender] = useState("");

  const usersCollectionRef = collection(db, "register");

  const handleSubmit = async () => {
    await addDoc(usersCollectionRef, {
      firstname: firstname,
      surname: surname,
      email: email,
      password: password,
      dateofbirth,
      gender,
    }).then(() => {
      setshowRegister(false);
    });
  };

  const [moreGender, setmoreGender] = useState(false);
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showRegister ? 1 : 0,
  });
  return (
    <>
      {showRegister ? (
        <div className="w-screen h-screen fixed flex justify-center items-center -top-100 backdrop-sepia-0 bg-white/70 z-10 ">
          <animated.div style={animation}>
            <div className="bg-white p-4 relative rounded-md drop-shadow-xl w-[430px] overflow-hidden ">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p onClick={() => setshowRegister((prev) => !prev)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </div>
              <p>It's quick and easy.</p>
              <div className="mb-6 mt-2">
                <hr className="w-screen absolute border-slate-300 -right-10  px-70" />
              </div>
              <div>
                <div className="flex">
                  <input
                    type="firstname"
                    value={firstname}
                    onChange={(event) => setFirstname(event.target.value)}
                    placeholder="First name"
                    className=" w-1/2 bg-gray-100 mr-3 mb-3 py-1.5 px-2 border placeholder:font-normal border-gray-300 focus:outline-none rounded-md "
                  />
                  <input
                    type="Surname"
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                    placeholder="Surname"
                    className="w-1/2 bg-gray-100  mb-3 py-1.5 px-2 border placeholder:font-normal border-gray-300 focus:outline-none rounded-md "
                  />
                </div>
                <div className="grid">
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Mobile number or email address"
                    className="w-full bg-gray-100  mb-3 py-1.5 px-2 border placeholder:font-normal border-gray-300 focus:outline-none rounded-md "
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="New password"
                    className="w-full bg-gray-100  mb-3 py-1.5 px-2 border placeholder:font-normal border-gray-300 focus:outline-none rounded-md "
                  />
                </div>
                <div className="inline-flex items-center justify-center">
                  <p className="font-light text-[12px]">Date of birth</p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill=" #64748b"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                </div>
                <div className="flex">
                  <select
                    name="day"
                    onChange={(e) =>
                      setDateofbirth([...dateofbirth, e.target.value])
                    }
                    className="w-1/3 mr-3 mb-3 border border-gray-300 focus:outline-none rounded-md"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <select
                    name="mouth"
                    onChange={(e) =>
                      setDateofbirth([...dateofbirth, e.target.value])
                    }
                    className="w-1/3 mr-3 mb-3 border placeholder:font-normal border-gray-300 focus:outline-none rounded-md"
                  >
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                  </select>
                  <select
                    name="year"
                    onChange={(e) =>
                      setDateofbirth([...dateofbirth, e.target.value])
                    }
                    className="w-1/3 mb-2 py-2  border placeholder:font-normal border-gray-300 focus:outline-none rounded-md"
                  >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                    <option value="1929">1929</option>
                    <option value="1928">1928</option>
                    <option value="1927">1927</option>
                    <option value="1926">1926</option>
                    <option value="1925">1925</option>
                    <option value="1924">1924</option>
                    <option value="1923">1923</option>
                    <option value="1922">1922</option>
                    <option value="1921">1921</option>
                    <option value="1920">1920</option>
                    <option value="1919">1919</option>
                    <option value="1918">1918</option>
                    <option value="1917">1917</option>
                    <option value="1916">1916</option>
                    <option value="1915">1915</option>
                    <option value="1914">1914</option>
                    <option value="1913">1913</option>
                    <option value="1912">1912</option>
                    <option value="1911">1911</option>
                    <option value="1910">1910</option>
                    <option value="1909">1909</option>
                    <option value="1908">1908</option>
                    <option value="1907">1907</option>
                    <option value="1906">1906</option>
                    <option value="1905">1905</option>
                  </select>
                </div>
                {/* Genger */}
                <div className="inline-flex items-center justify-center">
                  <p className="font-light text-[12px]">Gender</p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill=" #64748b"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </p>
                </div>
                <div className="flex justify-between">
                  <label className=" inline-flex items-center border py-1 px-3 placeholder:font-normal border-gray-300 focus:outline-none rounded-md">
                    <span className="mr-10">Female</span>
                    <input
                      onChange={(e) => setGender(e.target.value)}
                      onClick={() => setmoreGender(false)}
                      value="Female"
                      type="radio"
                      name="gender"
                    ></input>
                  </label>
                  <label className=" inline-flex items-center border py-1 px-3 placeholder:font-normal border-gray-300 focus:outline-none rounded-md">
                    <span className="mr-10">Male</span>
                    <input
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="Male"
                      onClick={() => setmoreGender(false)}
                      type="radio"
                    ></input>
                  </label>
                  <label className=" inline-flex items-center border py-1 px-3 placeholder:font-normal border-gray-300 focus:outline-none rounded-md">
                    <span className="mr-10">Custom</span>
                    <input
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="Custom"
                      onClick={() => setmoreGender(true)}
                      type="radio"
                    ></input>
                  </label>
                </div>
                {moreGender && (
                  <div className="relative ">
                    <select
                      id="moregender"
                      className="w-full mr-3 mt-4 py-2 border placeholder:font-normal border-gray-300 focus:outline-none rounded-md"
                    >
                      <option disabled>Select your pronoun</option>
                      <option value="Feb">
                        She: "Wish her a happy birthday!"
                      </option>
                      <option value="Mar">
                        He: "Wish him a happy birthday!"
                      </option>
                      <option value="Mar">
                        They: "Wish them a happy birthday!"
                      </option>
                    </select>
                    <p className="text-[10px] my-1">
                      Your pronoun is visible to everyone.
                    </p>
                    <input
                      onChange={(e) => setGender(e.target.value)}
                      type="text"
                      className=" w-full bg-gray-100 mr-3 mb-3 py-1.5 px-2 border placeholder:font-normal border-gray-300 focus:outline-none rounded-md "
                      placeholder="Gender (optional)"
                    />
                  </div>
                )}
                <div className="w-full mb-3 mt-2">
                  <p className="text-gray-500 text-[11px]">
                    By clicking Sign Up, you agree to our Terms, Data Policy and
                    Cookie Policy.
                    <br /> You may receive SMS notifications from us and can opt
                    out at any time.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="self-center bg-green-600 bg-gradient-to-t hover:from-green-700 hover:to-slate-400 mt-1 mb-4 transition duration-100 text-white py-1 px-16 rounded-lg font-semibold text-lg "
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Register;
