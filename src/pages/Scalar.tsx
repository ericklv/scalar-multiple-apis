import { ApiReferenceReact } from '@scalar/api-reference-react'
import { useNavigate } from 'react-router-dom'

const Scalar = (props: any) => {
    const { id, yaml } = props
    const navi = useNavigate();

    const go_home = () => navi('/', { replace: false })

    return (
        <div id={id} className='scalar-content'>
            <ApiReferenceReact
                configuration={{
                    spec: {
                        url: yaml,
                    },
                }}
            />
            <button className='btn-home btn-fixed' onClick={_ => go_home()}>Go Home</button>
        </div>
    )
}

export default Scalar