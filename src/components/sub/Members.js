import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Members() {
	const path = process.env.PUBLIC_URL;
	const history = useHistory();
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		comments: '',
		edu: '',
		gender: null,
		interests: null,
	};
	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	const check = (value) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+]/;

		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요.';
		}
		if (value.email.length < 8 || !/@/.test(Val.email)) {
			errs.email = '이메일은 8글자이상 @를 포함하세요';
		}
		if (
			value.pwd1 < 5 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 = '비밀번호는 5글자 이상, 영문,숫자,특수문자를 모두 포함하세요';
		}
		if (value.pwd1 !== value.pwd2 || value.pwd2 < 5) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요';
		}
		if (!Val.gender) {
			errs.gender = '성별을 선택하세요.';
		}
		if (!Val.interests) {
			errs.interests = '관심사를 하나이상 선택하세요.';
		}

		if (Val.comments.length < 20) {
			errs.comments = '남기는말을 20글자 이상 입력하세요';
		}
		if (Val.mbti === '') {
			errs.mbti = 'MBTI을 선택하세요.';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
	};

	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.value;
		console.log(isSelected);
		setVal({ ...Val, [name]: isSelected });
	};

	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});

		setVal({ ...Val, [name]: isCheck });
	};

	const handleReset = () => {
		setSubmit(false);
		setErr({});
		setVal(initVal);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('회원가입이 완료되었습니다. 메인페이지로 이동합니다.');

			history.push('/youtube');
		}
	}, [Err]);

	return (
		<Layout name={'Members'}>
			<h2>Drops us a line to get the conversation started.</h2>
			<div className='pic'>
				<img src={`${path}/img/members.jpg`} alt='배너' />
			</div>
			<div className='text'>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend className='h'>Members</legend>
						<table border='1'>
							<caption className='h'>INPUT</caption>
							<tbody>
								{/* userid */}
								<tr>
									<th scope='row'>
										<label htmlFor='userid'>USER ID</label>
									</th>
									<td>
										<input
											type='text'
											placeholder='아이디를 입력하세요'
											name='userid'
											id='userid'
											value={Val.userid}
											onChange={handleChange}
										/>
										<span className='err'>{Err.userid}</span>
									</td>
								</tr>

								{/* password */}
								<tr>
									<th scope='row'>
										<label htmlFor='pwd1'>PASSWORD</label>
									</th>
									<td>
										<input
											type='password'
											name='pwd1'
											id='pwd1'
											placeholder='비밀번호를 입력하세요'
											onChange={handleChange}
										/>
										<span className='err'>{Err.pwd1}</span>
									</td>
								</tr>
								<tr>
									<th scope='row'>
										<label htmlFor='pwd2'>RE-PASSWORD</label>
									</th>
									<td>
										<input
											type='password'
											name='pwd2'
											id='pwd2'
											placeholder='비밀번호를 재입력하세요'
											onChange={handleChange}
										/>
										<span className='err'>{Err.pwd2}</span>
									</td>
								</tr>

								{/* email */}
								<tr>
									<th scope='row'>
										<label htmlFor='email'>E-MAIL</label>
									</th>
									<td>
										<input
											type='text'
											id='email'
											name='email'
											placeholder='이메일 주소를 입력하세요.'
											value={Val.email}
											onChange={handleChange}
										/>
										<span className='err'>{Err.email}</span>
									</td>
								</tr>

								{/* mbti */}
								<tr>
									<th scope='row'>
										<label htmlFor='mbti'>mbti</label>
									</th>
									<td>
										<select name='mbti' id='mbti' onChange={handleSelect}>
											<option value=''>MBTI 성격 유형을 선택하세요.</option>
											<option value='istj'>ISTJ</option>
											<option value='isfj'>ISFJ</option>
											<option value='infj'>INFJ</option>
											<option value='intj'>INTJ</option>
											<option value='istp'>ISTP</option>
											<option value='isfp'>ISFP</option>
											<option value='infp'>INFP</option>
											<option value='intp'>INTP</option>
											<option value='estp'>ESTP</option>
											<option value='esfp'>ESFP</option>
											<option value='enfp'>ENFP</option>
											<option value='entp'>ENTP</option>
											<option value='estj'>ESTJ</option>
											<option value='esfj'>ESFJ</option>
											<option value='enfj'>ENFJ</option>
											<option value='entj'>ENTJ</option>
										</select>
										<span className='err'>{Err.mbti}</span>
									</td>
								</tr>

								{/* gender */}
								<tr>
									<th scope='row'>GENDER</th>
									<td>
										<label htmlFor='male'>MALE</label>
										<input
											type='radio'
											id='male'
											name='gender'
											onChange={handleRadio}
										/>

										<label htmlFor='female'>FEMALE</label>
										<input
											type='radio'
											id='female'
											name='gender'
											onChange={handleRadio}
										/>
										<span className='err'>{Err.gender}</span>
									</td>
								</tr>

								{/* interests */}
								<tr>
									<th scope='row'>INTERESTS</th>
									<td>
										<label htmlFor='coffee'>COFFEE</label>
										<input
											type='checkbox'
											id='coffe'
											name='interests'
											onChange={handleCheck}
										/>

										<label htmlFor='dessert'>DESSERT</label>
										<input
											type='checkbox'
											id='desser'
											name='interests'
											onChange={handleCheck}
										/>

										<label htmlFor='dishes'>DISHES</label>
										<input
											type='checkbox'
											id='dishes'
											name='interests'
											onChange={handleCheck}
										/>
										<span className='err'>{Err.interests}</span>
									</td>
								</tr>

								{/* comments */}
								<tr>
									<th scope='row'>
										<label htmlFor='comments'>COMMENTS</label>
									</th>
									<td>
										<textarea
											name='comments'
											id='comments'
											cols='30'
											rows='5'
											value={Val.comments}
											onChange={handleChange}></textarea>
										<span className='err'>{Err.comments}</span>
									</td>
								</tr>

								{/* btn set */}
								<tr>
									<th colSpan='2'>
										<input type='reset' value='CANCEL' onClick={handleReset} />
										<input
											type='submit'
											value='SEND'
											onClick={() => setSubmit(true)}
										/>
									</th>
								</tr>
							</tbody>
						</table>
					</fieldset>
				</form>
			</div>
		</Layout>
	);
}

export default Members;
