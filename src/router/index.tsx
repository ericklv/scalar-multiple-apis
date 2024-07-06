import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';
import NotFound from './../pages/NotFound';
import {apis} from './../docs';
import Scalar from './../pages/Scalar';

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {apis && apis.map(({ id, yaml, page }) => (
          <Route path={page}
            key={id + '-router'}
            element={<Scalar key={id + '-scalar'} yaml={yaml} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
