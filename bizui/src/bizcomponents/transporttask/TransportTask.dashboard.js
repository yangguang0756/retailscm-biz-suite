

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge, Switch,Select,Form,AutoComplete,Modal } from 'antd'
import { Link, Route, Redirect} from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './TransportTask.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
import GlobalComponents from '../../custcomponents';
import DashboardTool from '../../common/Dashboard.tool'


const {aggregateDataset,calcKey, defaultHideCloseTrans,
  defaultImageListOf,defaultSettingListOf,defaultBuildTransferModal,
  defaultExecuteTrans,defaultHandleTransferSearch,defaultShowTransferModel,
  defaultRenderExtraHeader,
  defaultSubListsOf,
  defaultRenderExtraFooter,renderForTimeLine,renderForNumbers
}= DashboardTool



const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const { Option } = Select


const imageList =(transportTask)=>{return [
	 ]}

const internalImageListOf = (transportTask) =>defaultImageListOf(transportTask,imageList)

const optionList =(transportTask)=>{return [ 
	]}

const buildTransferModal = defaultBuildTransferModal
const showTransferModel = defaultShowTransferModel
const internalSettingListOf = (transportTask) =>defaultSettingListOf(transportTask, optionList)
const internalLargeTextOf = (transportTask) =>{

	return null
	

}







const internalRenderExtraHeader = defaultRenderExtraHeader




const internalRenderExtraFooter = defaultRenderExtraFooter
const internalSubListsOf = defaultSubListsOf

const internalSummaryOf = (transportTask,targetComponent) =>{
	
	
	const {TransportTaskService} = GlobalComponents
	
	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{transportTask.id}</Description> 
<Description term="名称">{transportTask.name}</Description> 
<Description term="开始">{transportTask.start}</Description> 
<Description term="开始时间">{ moment(transportTask.beginTime).format('YYYY-MM-DD')}</Description> 
<Description term="结束">{transportTask.end==null?"未分配":transportTask.end.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"结束","retailStore",TransportTaskService.requestCandidateEnd,
	      TransportTaskService.transferToAnotherEnd,"anotherEndId",transportTask.end?transportTask.end.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="司机">{transportTask.driver==null?"未分配":transportTask.driver.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"司机","truckDriver",TransportTaskService.requestCandidateDriver,
	      TransportTaskService.transferToAnotherDriver,"anotherDriverId",transportTask.driver?transportTask.driver.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="卡车">{transportTask.truck==null?"未分配":transportTask.truck.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"卡车","transportTruck",TransportTaskService.requestCandidateTruck,
	      TransportTaskService.transferToAnotherTruck,"anotherTruckId",transportTask.truck?transportTask.truck.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="属于">{transportTask.belongsTo==null?"未分配":transportTask.belongsTo.displayName}
 <Icon type="swap" onClick={()=>
  showTransferModel(targetComponent,"属于","transportFleet",TransportTaskService.requestCandidateBelongsTo,
	      TransportTaskService.transferToAnotherBelongsTo,"anotherBelongsToId",transportTask.belongsTo?transportTask.belongsTo.id:"")} 
  style={{fontSize: 20,color:"red"}} />
</Description>
<Description term="纬度">{transportTask.latitude}</Description> 
<Description term="经度">{transportTask.longitude}</Description> 
	
        {buildTransferModal(transportTask,targetComponent)}
      </DescriptionList>
	)

}


class TransportTaskDashboard extends Component {

 state = {
    transferModalVisiable: false,
    candidateReferenceList: {},
    candidateServiceName:"",
    candidateObjectType:"city",
    targetLocalName:"城市",
    transferServiceName:"",
    currentValue:"",
    transferTargetParameterName:"",  
    defaultType: 'transportTask'


  }
  componentDidMount() {

  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, goodsListMetaInfo, transportTaskTrackListMetaInfo, goodsCount, transportTaskTrackCount } = this.props.transportTask
    if(!this.props.transportTask.class){
      return null
    }
    const cardsData = {cardsName:"运输任务",cardsFor: "transportTask",cardsSource: this.props.transportTask,
  		subItems: [
{name: 'goodsList', displayName:'货物',type:'goods',count:goodsCount,addFunction: true, role: 'goods', metaInfo: goodsListMetaInfo},
{name: 'transportTaskTrackList', displayName:'运输任务跟踪',type:'transportTaskTrack',count:transportTaskTrackCount,addFunction: true, role: 'transportTaskTrack', metaInfo: transportTaskTrackListMetaInfo},
    
      	],
  	};
    //下面各个渲染方法都可以定制，只要在每个模型的里面的_features="custom"就可以得到定制的例子
    
    const renderExtraHeader = this.props.renderExtraHeader || internalRenderExtraHeader
    const settingListOf = this.props.settingListOf || internalSettingListOf
    const imageListOf = this.props.imageListOf || internalImageListOf
    const subListsOf = this.props.subListsOf || internalSubListsOf
    const largeTextOf = this.props.largeTextOf ||internalLargeTextOf
    const summaryOf = this.props.summaryOf || internalSummaryOf
    const renderExtraFooter = this.props.renderExtraFooter || internalRenderExtraFooter
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource,this)}
        wrapperClassName={styles.advancedForm}
      >
      {renderExtraHeader(cardsData.cardsSource)}
        <div>
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}
        {subListsOf(cardsData)} 
        {largeTextOf(cardsData.cardsSource)}
          
        </div>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  transportTask: state._transportTask,
}))(Form.create()(TransportTaskDashboard))

