import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch,Modal } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './RetailStoreCountryCenter.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import RetailStoreCountryCenterBase from './RetailStoreCountryCenter.base'
import SelectObject from '../../components/SelectObject'


const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  name: '双链小超中国国运营中心',
  serviceNumber: '4000-800-',
  founded: '2018-06-03',
  webSite: 'https://www.doublechaintech.com/',
  address: '四川省成都市天府新区双链大厦',
  operatedBy: '双链集团',
  legalRepresentative: '张喜来',
  description: '中国中心正式成立，恭喜恭喜',
}
*/


const imageKeys = [
]


class RetailStoreCountryCenterAssociateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
 
    
    
    
  }

  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  



  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source)

    const { fileList } = event
    const { convertedImagesValues } = this.state

    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change:', source)
  }
	
  

  render() {
	const { form, dispatch, submitting, role,data,owner,toggleAssociatePaymentVisible,visible,onCancel, onCreate } = this.props
    const { convertedImagesValues } = this.state
    const {RetailStoreCountryCenterService} = GlobalComponents
 const {ReportModalTable} = GlobalComponents;
 const {CatalogModalTable} = GlobalComponents;
 const {RetailStoreProvinceCenterModalTable} = GlobalComponents;
 const {RetailStoreModalTable} = GlobalComponents;
 const {RetailStoreMemberModalTable} = GlobalComponents;
 const {GoodsSupplierModalTable} = GlobalComponents;
 const {SupplyOrderModalTable} = GlobalComponents;
 const {RetailStoreOrderModalTable} = GlobalComponents;
 const {WarehouseModalTable} = GlobalComponents;
 const {TransportFleetModalTable} = GlobalComponents;
 const {AccountSetModalTable} = GlobalComponents;
 const {LevelOneDepartmentModalTable} = GlobalComponents;
 const {SkillTypeModalTable} = GlobalComponents;
 const {ResponsibilityTypeModalTable} = GlobalComponents;
 const {TerminationReasonModalTable} = GlobalComponents;
 const {TerminationTypeModalTable} = GlobalComponents;
 const {OccupationTypeModalTable} = GlobalComponents;
 const {LeaveTypeModalTable} = GlobalComponents;
 const {SalaryGradeModalTable} = GlobalComponents;
 const {InterviewTypeModalTable} = GlobalComponents;
 const {TrainingCourseTypeModalTable} = GlobalComponents;
 const {PublicHolidayModalTable} = GlobalComponents;
 const {EmployeeModalTable} = GlobalComponents;
 const {InstructorModalTable} = GlobalComponents;
 const {CompanyTrainingModalTable} = GlobalComponents;


    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const {fieldLabels} = RetailStoreCountryCenterBase
    
    const capFirstChar = (value)=>{
    	//const upper = value.replace(/^\w/, c => c.toUpperCase());
  		const upper = value.charAt(0).toUpperCase() + value.substr(1);
  		return upper
  	}
    
    
    

    
    
    const tryinit  = (fieldName, candidates) => {
      
      if(candidates&&candidates.length==1){
          return candidates[0].id
      }
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return null
      }
      return owner.id
    }
    
    const availableForEdit= (fieldName) =>{
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return true
      }
      return false
    
    }
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
    }
    const switchFormItemLayout = {
      labelCol: { span: 14 },
      wrapperCol: { span: 4 },
    }
    
    return (
 <Modal
          title="创建新的支付"
          visible={visible}
          onOk={onCancel}
          onCancel={onCancel}
          width={920}
          style={{ top: 40}}
        >
        <Card title="基础信息"  className={styles.card} style={{ backgroundColor:"#eee" }}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.name} {...formItemLayout}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入名称' }],
                  })(
                    <Input placeholder="请输入名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.serviceNumber} {...formItemLayout}>
                  {getFieldDecorator('serviceNumber', {
                    rules: [{ required: true, message: '请输入服务号码' }],
                  })(
                    <Input placeholder="请输入服务号码" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.founded} {...formItemLayout}>
                  {getFieldDecorator('founded', {
                    rules: [{ required: true, message: '请输入成立' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入成立" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.webSite} {...formItemLayout}>
                  {getFieldDecorator('webSite', {
                    rules: [{ required: true, message: '请输入网站' }],
                  })(
                    <Input placeholder="请输入网站" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.address} {...formItemLayout}>
                  {getFieldDecorator('address', {
                    rules: [{ required: true, message: '请输入地址' }],
                  })(
                    <Input placeholder="请输入地址" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.operatedBy} {...formItemLayout}>
                  {getFieldDecorator('operatedBy', {
                    rules: [{ required: true, message: '请输入由' }],
                  })(
                    <Input placeholder="请输入由" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.legalRepresentative} {...formItemLayout}>
                  {getFieldDecorator('legalRepresentative', {
                    rules: [{ required: true, message: '请输入法定代表人' }],
                  })(
                    <Input placeholder="请输入法定代表人" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={12}>
                <Form.Item label={fieldLabels.description} {...formItemLayout}>
                  {getFieldDecorator('description', {
                    rules: [{ required: true, message: '请输入描述' }],
                  })(
                    <Input placeholder="请输入描述" />
                  )}
                </Form.Item>
              </Col>

            </Row>


       
        









			</Form>
			
			
			
			
        </Card>
        
	<ReportModalTable data={data.reportList} owner={owner} />
	<CatalogModalTable data={data.catalogList} owner={owner} />
	<RetailStoreProvinceCenterModalTable data={data.retailStoreProvinceCenterList} owner={owner} />
	<RetailStoreModalTable data={data.retailStoreList} owner={owner} />
	<RetailStoreMemberModalTable data={data.retailStoreMemberList} owner={owner} />
	<GoodsSupplierModalTable data={data.goodsSupplierList} owner={owner} />
	<SupplyOrderModalTable data={data.supplyOrderList} owner={owner} />
	<RetailStoreOrderModalTable data={data.retailStoreOrderList} owner={owner} />
	<WarehouseModalTable data={data.warehouseList} owner={owner} />
	<TransportFleetModalTable data={data.transportFleetList} owner={owner} />
	<AccountSetModalTable data={data.accountSetList} owner={owner} />
	<LevelOneDepartmentModalTable data={data.levelOneDepartmentList} owner={owner} />
	<SkillTypeModalTable data={data.skillTypeList} owner={owner} />
	<ResponsibilityTypeModalTable data={data.responsibilityTypeList} owner={owner} />
	<TerminationReasonModalTable data={data.terminationReasonList} owner={owner} />
	<TerminationTypeModalTable data={data.terminationTypeList} owner={owner} />
	<OccupationTypeModalTable data={data.occupationTypeList} owner={owner} />
	<LeaveTypeModalTable data={data.leaveTypeList} owner={owner} />
	<SalaryGradeModalTable data={data.salaryGradeList} owner={owner} />
	<InterviewTypeModalTable data={data.interviewTypeList} owner={owner} />
	<TrainingCourseTypeModalTable data={data.trainingCourseTypeList} owner={owner} />
	<PublicHolidayModalTable data={data.publicHolidayList} owner={owner} />
	<EmployeeModalTable data={data.employeeList} owner={owner} />
	<InstructorModalTable data={data.instructorList} owner={owner} />
	<CompanyTrainingModalTable data={data.companyTrainingList} owner={owner} />
        
        
        
      </Modal>)
    
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(RetailStoreCountryCenterAssociateForm))




