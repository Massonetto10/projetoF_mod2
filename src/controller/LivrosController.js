
import { livro } from "../model/livro.js"

export const getIndex = async (req, res) => {
    const livros = await livro.findAll()
    try {
        res.render('index.ejs', {
            livros
        })
    }

    catch(err) {
        res.send(err)
    }
}

export const getDetalhes = async (req, res) => {
    try {
        const livros = await livro.findByPk(req.params.id)
        res.status(200).render('details.ejs', {
            livros
        })
    } catch (err) {
        res.status(500).send({
            err: err.message
        })
    }
}

export const getDeletar = async (req, res) => {
    try {
        await livro.destroy({
            where: {
            id: req.params.id
        }})
        res.status(200).redirect("/")
    }
    catch(err){
        res.status(500).send({err: err.message})
    }
}

export const getCriar = (req, res) => {
    res.status(200).render('create')
}

export const postCriar = async (req, res) => {
    try {
        const { titulo, ano, autores, sinopse,img} = req.body
        
        await livro.create({
            titulo, ano, autores, sinopse,img
        })
        res.status(200).redirect('/')
    }
    catch(err){
        res.send(err.message)
    }
}

export const getEditar = async (req, res) => {
    const livros = await livro.findByPk(req.params.id)
    res.status(200).render('edit.ejs', {
        livros
    })
}

export const postEditar = async (req, res) => {
    const { titulo, ano, autores, sinopse,img } = req.body
    try {
        await livro.update({
            titulo: titulo, 
            ano: ano, 
            autores: autores, 
            sinopse: sinopse, 
            img: img, 
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/')
    }

    catch(err) {
        res.status(500).send(err.message)
    }
}