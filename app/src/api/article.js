import request from '@/utils/request'

export function getArticleList(data, query) {
  return request({
    url: `/api/article/list`,
    method: 'get',
    params: {
      title: data.title,
      author: data.author,
      category: data.category,
      page: query.page,
      limit: query.limit
    }
  })
}

export function findAllArticle() {
  return request({
    url: `/api/article/findAll`,
    method: 'get'
  })
}

export function findArchives() {
  return request({
    url: `/api/article/archives`,
    method: 'get'
  })
}

export function getArticleListForSite(current) {
  return request({
    url: `/api/article/listForSite/page/${current}`,
    method: 'get'
  })
}

export function findById(id) {
  return request({
    url: `/api/article/${id}`,
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: `/api/article`,
    method: 'put',
    data
  })
}

export function add(data) {
  return request({
    url: `/api/article`,
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: `/api/article/${id}`,
    method: 'delete'
  })
}

export function count() {
  return request({
    url: `/api/article/count`,
    method: 'get'
  })
}
