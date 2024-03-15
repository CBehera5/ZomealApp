import {Text, FormControl,Button,Box, HStack, LinearGradient} from "@gluestack-ui/themed"
import CustomButton from "../components/CustomButton"
import Textfield from "../components/CustomTextfield"
import CustomOtpfield from "../components/CustomOtpfield"
import CustomText from "../components/CustomText"
import CustomLink from "../components/CustomLink"
import {LinearGradient as RNLinearGradient} from "react-native-linear-gradient"
import { accentBg, colorGrade1, colorGrade2, textColor } from "../constants/Stylesheet"
import { useState } from "react"

const Verifycode=({handleChangeText,confirmEvent,onChangeText,value,keyboardType,onFilled})=>{
  const [text,setText] = useState(' ')
return(
  <LinearGradient
   style={{flex:1}}
  colors={[colorGrade1,colorGrade2]}
  as={RNLinearGradient}
  >
<Box w={'$90'} h={'$90'} flex={1} justifyContent="center" alignItems="center"> 
    <CustomText paddingTop={'$10'} fontSize={21.5} fontWeight={700} text={'Enter Verification code'} color={textColor}/>
    <CustomText color={textColor} width={'80%'} textAlign={'justify'} fontSize={14.5} text={'We are automatically detecting a SMS send to your registered mobile number'}/>
  <CustomOtpfield size={'xl'} value={value} onFilled={onFilled} onChangeText={onChangeText} keyboardType={keyboardType}/>
 
  <CustomButton variant={'elevated'} width={'70%'} height={50} marginTop={20} bgColor={textColor} color={accentBg} title={'Confirm Code'} handlePressEvent={confirmEvent}/>

  <HStack py={'$10'} justifyContent="center">
    <CustomText text={'Dont recieve the OTP?'}/>
    <CustomLink text={'RESEND OTP'} linkColor={textColor} linkFontWeight={700}/>
  </HStack>
</Box>
  </LinearGradient>

)
}

export default Verifycode