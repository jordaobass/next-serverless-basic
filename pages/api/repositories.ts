import {NextApiRequest, NextApiResponse} from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

    /*  define o tempo de duracao do cache dessa api*/
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400, stale-while-revalidate, public');

    const response = await fetch('https://api.github.com/users/jordaobass/repos');
    const data = await response.json();
    const date = new Date().toISOString();

    return res.status(200).json({
        time: date,
        data,
    })
}
