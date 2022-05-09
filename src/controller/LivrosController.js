
import { livro } from "../model/livro.js"

 
 export let message = "";

export const getIndex = async (req, res) => {
    setTimeout(() => {
        message = "";
      }, 1000);
    try {
        const livros = await livro.findAll()
        res.render('index.ejs', {
            livros,message
        })
    }

    catch(err) {
        res.send(err.message)
    }
}

export const getDetalhes = async (req, res) => {
    try {
        const livros = await livro.findByPk(req.params.id)
        res.status(200).render('details.ejs', {
            livros,message
        })
    } catch (error) {
        res.send({
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
        message='Livro Removido com Sucesso!'
        res.status(200).redirect("/")
    }
    catch(err){
        res.status(500).send({err: err.message})
    }
}

export const getCriar = (req, res) => {
    res.render('create.ejs',{message})
}

export const postCriar = async (req, res) => {
    let {titulo,ano,autores,sinopse,img} = req.body
    try {
        if(!titulo || !ano || !autores || !sinopse || !img){
            message='Erro todos os campos devem ser preenchidos!'
            res.redirect('/criar')
        } else {
            await livro.create({titulo, ano, autores, sinopse, img, })
            message='Livro Adicionado com Sucesso!'          
            res.redirect('/')
        }
    }
    catch(err){
        res.send(err.message)
    }
}

export const getEditar = async (req, res) => {
    try{
    const livros = await livro.findByPk(req.params.id)
    res.render('edit.ejs', {
        livros,message
    })
}
catch(error){
    res.send(error.message)
}
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
        message='Livro editado com Sucesso!'
        res.redirect('/')
        
    }
    catch(error){
        res.send(error.message)
    }
}