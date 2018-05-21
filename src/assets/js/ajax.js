/*
 * @Author: guotq
 * @Date: 2018-05-18 14:27:52
 * @Last Modified by: guotq
 * @Last Modified time: 2018-05-18 14:27:54
 * @Description: 基于 axios 封装成 JQ ajax，减少学习成本
 */

import axios from 'axios';

/**
 * 基于 axios 实现 ajax
 * @param {Object} options 配置信息
 */
const ajax = function (options) {

    // 默认配置
    const defaultSettings = {
        method: 'post',
        timeout: 15000,
        data: '',
        dataType: 'json',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        beforeSend: () => {},
        complete: () => {}
    };

    // 添加一个请求拦截器
    axios.interceptors.request(function (config) {
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
};

export default ajax;