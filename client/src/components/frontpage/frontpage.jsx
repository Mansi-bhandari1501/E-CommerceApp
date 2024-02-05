import React from 'react'
import Section1 from './section1';
import { useAuth } from "../../context/auth";

const Frontpage = () => {
    const [auth, setAuth] = useAuth();
    return (
      <div>
      <Section1 />
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  );
}

export default Frontpage;
