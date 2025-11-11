import {type FC } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionService } from '../../../services/question';
import { useEffect } from 'react';

const Edit: FC = () => {
    const { id = ''} = useParams();

    useEffect(() => {
        getQuestionService(id).then(res => {
            console.log(res);
        });
    }, [id]);

    return <p>Edit</p>
}

export default Edit