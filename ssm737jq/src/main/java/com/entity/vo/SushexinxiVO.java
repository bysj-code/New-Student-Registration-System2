package com.entity.vo;

import com.entity.SushexinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
 

/**
 * 宿舍信息
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2022-03-05 08:18:47
 */
public class SushexinxiVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 宿舍类型
	 */
	
	private String susheleixing;
		
	/**
	 * 楼层
	 */
	
	private String louceng;
		
	/**
	 * 位置
	 */
	
	private String weizhi;
		
	/**
	 * 剩余床位
	 */
	
	private Integer shengyuchuangwei;
		
	/**
	 * 床位号
	 */
	
	private String chuangweihao;
		
	/**
	 * 未住床位
	 */
	
	private String weizhuchuangwei;
				
	
	/**
	 * 设置：宿舍类型
	 */
	 
	public void setSusheleixing(String susheleixing) {
		this.susheleixing = susheleixing;
	}
	
	/**
	 * 获取：宿舍类型
	 */
	public String getSusheleixing() {
		return susheleixing;
	}
				
	
	/**
	 * 设置：楼层
	 */
	 
	public void setLouceng(String louceng) {
		this.louceng = louceng;
	}
	
	/**
	 * 获取：楼层
	 */
	public String getLouceng() {
		return louceng;
	}
				
	
	/**
	 * 设置：位置
	 */
	 
	public void setWeizhi(String weizhi) {
		this.weizhi = weizhi;
	}
	
	/**
	 * 获取：位置
	 */
	public String getWeizhi() {
		return weizhi;
	}
				
	
	/**
	 * 设置：剩余床位
	 */
	 
	public void setShengyuchuangwei(Integer shengyuchuangwei) {
		this.shengyuchuangwei = shengyuchuangwei;
	}
	
	/**
	 * 获取：剩余床位
	 */
	public Integer getShengyuchuangwei() {
		return shengyuchuangwei;
	}
				
	
	/**
	 * 设置：床位号
	 */
	 
	public void setChuangweihao(String chuangweihao) {
		this.chuangweihao = chuangweihao;
	}
	
	/**
	 * 获取：床位号
	 */
	public String getChuangweihao() {
		return chuangweihao;
	}
				
	
	/**
	 * 设置：未住床位
	 */
	 
	public void setWeizhuchuangwei(String weizhuchuangwei) {
		this.weizhuchuangwei = weizhuchuangwei;
	}
	
	/**
	 * 获取：未住床位
	 */
	public String getWeizhuchuangwei() {
		return weizhuchuangwei;
	}
			
}
