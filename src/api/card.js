import request from "@/utils/request";


// https://api-hmzs.itheima.net/v1/parking/card/list
/**
 * 获取月卡列表
 * @param {*} params 
 * @returns 
 */

export function getCardListAPI(params) {
    return request({
      url: "parking/card/list",
      method: "GET",
      params,
    });
  }
  