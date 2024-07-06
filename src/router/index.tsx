import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';
import NotFound from './../pages/NotFound';
import apis from './../docs/apis.json'
import Scalar from '../pages/Scalar';

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {apis && apis.map(({ id, yaml, page }) => (
          <Route path={page}
            element={<Scalar id={id} yaml={yaml} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
