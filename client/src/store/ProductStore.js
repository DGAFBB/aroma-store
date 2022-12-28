import React from 'react';
import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = []
        this._aromas = []
        this._products = []
        this._prices = []
        this._selectedType = {}
        this._selectedAroma = {}
        this._selectedPrice = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setAromas(aromas) {
        this._aromas = aromas
    }
    setProducts(products) {
        this._products = products
    }
    setPrices(prices) {
        this._prices = prices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedAroma(aroma) {
        this.setPage(1)
        this._selectedAroma = aroma
    }
    setSelectedPrice(price) {
        this.setPage(1)
        this._selectedPrice = price
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get aromas() {
        return this._aromas
    }
    get products() {
        return this._products
    }
    get prices() {
        return this._prices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedAroma() {
        return this._selectedAroma
    }
    get selectedPrice() {
        return this._selectedPrice
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}