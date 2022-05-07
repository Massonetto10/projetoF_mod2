import express from "express"
import { getIndex, getDetalhes, getDeletar, getCriar, postCriar, getEditar, postEditar } from '../controller/LivrosController.js'

export const routes = express.Router()

routes.get('/', getIndex)
routes.get('/details/:id', getDetalhes)
routes.get('/delete/:id', getDeletar)

routes.get('/create', getCriar)
routes.post('/create', postCriar)

routes.get('/edit/:id', getEditar)
routes.post('/edit/:id', postEditar)