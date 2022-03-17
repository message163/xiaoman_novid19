import { defineStore } from 'pinia'
import { getApiList } from '../server'
import type { RootObject, Children,ChinaTotal,ChinaAdd,StatisGradeCityDetail} from './type'




export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    list: <RootObject>{},
    item: <Children[]>[],
    chinaAdd:<ChinaAdd>{},
    chinaTotal:<ChinaTotal>{},
    cityDetail:<StatisGradeCityDetail[]>[],
  }),
  actions: {
    async getList() {
      const result = await getApiList()
      this.list = result;
      this.chinaAdd = this.list.diseaseh5Shelf.chinaAdd
      this.chinaTotal = this.list.diseaseh5Shelf.chinaTotal
      this.cityDetail = this.list.statisGradeCityDetail.slice(0,10)
    }
  }
})
