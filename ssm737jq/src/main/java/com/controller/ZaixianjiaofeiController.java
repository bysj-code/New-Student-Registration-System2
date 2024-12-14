package com.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.ZaixianjiaofeiEntity;
import com.entity.view.ZaixianjiaofeiView;

import com.service.ZaixianjiaofeiService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;

/**
 * 在线缴费
 * 后端接口
 * @author 
 * @email 
 * @date 2022-03-05 08:18:47
 */
@RestController
@RequestMapping("/zaixianjiaofei")
public class ZaixianjiaofeiController {
    @Autowired
    private ZaixianjiaofeiService zaixianjiaofeiService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ZaixianjiaofeiEntity zaixianjiaofei, 
		HttpServletRequest request){

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("xuesheng")) {
			zaixianjiaofei.setXuehao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<ZaixianjiaofeiEntity> ew = new EntityWrapper<ZaixianjiaofeiEntity>();
		PageUtils page = zaixianjiaofeiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, zaixianjiaofei), params), params));
        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ZaixianjiaofeiEntity zaixianjiaofei, 
		HttpServletRequest request){

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("xuesheng")) {
			zaixianjiaofei.setXuehao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<ZaixianjiaofeiEntity> ew = new EntityWrapper<ZaixianjiaofeiEntity>();
		PageUtils page = zaixianjiaofeiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, zaixianjiaofei), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ZaixianjiaofeiEntity zaixianjiaofei){
       	EntityWrapper<ZaixianjiaofeiEntity> ew = new EntityWrapper<ZaixianjiaofeiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( zaixianjiaofei, "zaixianjiaofei")); 
        return R.ok().put("data", zaixianjiaofeiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ZaixianjiaofeiEntity zaixianjiaofei){
        EntityWrapper< ZaixianjiaofeiEntity> ew = new EntityWrapper< ZaixianjiaofeiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( zaixianjiaofei, "zaixianjiaofei")); 
		ZaixianjiaofeiView zaixianjiaofeiView =  zaixianjiaofeiService.selectView(ew);
		return R.ok("查询在线缴费成功").put("data", zaixianjiaofeiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ZaixianjiaofeiEntity zaixianjiaofei = zaixianjiaofeiService.selectById(id);
        return R.ok().put("data", zaixianjiaofei);
    }

    /**
     * 前端详情
     */
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ZaixianjiaofeiEntity zaixianjiaofei = zaixianjiaofeiService.selectById(id);
        return R.ok().put("data", zaixianjiaofei);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ZaixianjiaofeiEntity zaixianjiaofei, HttpServletRequest request){
    	zaixianjiaofei.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(zaixianjiaofei);

        zaixianjiaofeiService.insert(zaixianjiaofei);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ZaixianjiaofeiEntity zaixianjiaofei, HttpServletRequest request){
    	zaixianjiaofei.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(zaixianjiaofei);
    	zaixianjiaofei.setUserid((Long)request.getSession().getAttribute("userId"));

        zaixianjiaofeiService.insert(zaixianjiaofei);
        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody ZaixianjiaofeiEntity zaixianjiaofei, HttpServletRequest request){
        //ValidatorUtils.validateEntity(zaixianjiaofei);
        zaixianjiaofeiService.updateById(zaixianjiaofei);//全部更新
        return R.ok();
    }
    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        zaixianjiaofeiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
    /**
     * 提醒接口
     */
	@RequestMapping("/remind/{columnName}/{type}")
	public R remindCount(@PathVariable("columnName") String columnName, HttpServletRequest request, 
						 @PathVariable("type") String type,@RequestParam Map<String, Object> map) {
		map.put("column", columnName);
		map.put("type", type);
		
		if(type.equals("2")) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Calendar c = Calendar.getInstance();
			Date remindStartDate = null;
			Date remindEndDate = null;
			if(map.get("remindstart")!=null) {
				Integer remindStart = Integer.parseInt(map.get("remindstart").toString());
				c.setTime(new Date()); 
				c.add(Calendar.DAY_OF_MONTH,remindStart);
				remindStartDate = c.getTime();
				map.put("remindstart", sdf.format(remindStartDate));
			}
			if(map.get("remindend")!=null) {
				Integer remindEnd = Integer.parseInt(map.get("remindend").toString());
				c.setTime(new Date());
				c.add(Calendar.DAY_OF_MONTH,remindEnd);
				remindEndDate = c.getTime();
				map.put("remindend", sdf.format(remindEndDate));
			}
		}
		
		Wrapper<ZaixianjiaofeiEntity> wrapper = new EntityWrapper<ZaixianjiaofeiEntity>();
		if(map.get("remindstart")!=null) {
			wrapper.ge(columnName, map.get("remindstart"));
		}
		if(map.get("remindend")!=null) {
			wrapper.le(columnName, map.get("remindend"));
		}

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("xuesheng")) {
			wrapper.eq("xuehao", (String)request.getSession().getAttribute("username"));
		}

		int count = zaixianjiaofeiService.selectCount(wrapper);
		return R.ok().put("count", count);
	}
	







}
