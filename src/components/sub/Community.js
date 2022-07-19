import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';

function Community() {
	const dummyPosts = [
		{
			title: 'Creativity is a drug I cannot live without.',
			content:
				'The true traveler is he who goes on foot, and even then, he sits down a lot of the time.',
		},
		{
			title: 'A man has to have a code, a way of life to live by.',
			content: 'All would live long, but none would be old.',
		},
		{
			title: 'He not busy being born is busy dying.',
			content:
				'They must often change who would be constant in happiness or wisdom.',
		},
		{
			title: 'Sometimes even to live is an act of courage.',
			content:
				'The aging process has you firmly in its grasp if you never get the urge to throw a snowball.',
		},
		{
			title: 'True life is lived when tiny changes occur.',
			content: 'We are none of us infallible--not even the youngest of us.',
		},
		{
			title: 'Do not turn back when you are just at the goal.',
			content: 'Work and acquire, and thou hast chained the wheel of Chance.',
		},
		{
			title: 'Why be a man when you can be a success?',
			content: 'There is no security on this earth, there is only opportunity.',
		},
		{
			title: 'The secret to creativity is knowing how to hide your sources.',
			content:
				'We improve ourselves by victories over ourself. There must be contests, and you must win.',
		},
		{
			title: 'Nothing fails like success.',
			content:
				'I started concentrating so hard on my vision that I lost sight.',
		},
	];

	const input = useRef(null);
	const textarea = useRef(null);
	const inputEdit = useRef(null);
	const textareaEdit = useRef(null);

	const [Posts, setPosts] = useState(dummyPosts);
	const [Allowed, setAllowed] = useState(true);

	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
		if (inputEdit.current) {
			inputEdit.current.value = '';
			textareaEdit.current.value = '';
		}
	};

	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetForm();
			return alert('제목과 본문을 모두 입력하세요');
		}
		setPosts([
			...Posts,
			{ title: input.current.value, content: textarea.current.value },
		]);
		resetForm();
	};

	const deletePost = (index) => {
		console.log(index);

		setPosts(Posts.filter((post, idx) => idx !== index));
	};

	const enableUpdate = (index) => {
		if (!Allowed) return;

		setAllowed(false);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	const updatePost = (index) => {
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			resetForm();
			return alert('수정할 제목과 본문을 모두 입력하세요');
		}

		setPosts(
			Posts.map((post, idx) => {
				if (idx === index) {
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};
	useEffect(() => {
		console.log(Posts);
	}, [Posts]);

	const path = process.env.PUBLIC_URL;
	return (
		<Layout name={'Community'}>
			<ul className='iconbox'>
				<li>
					<img src={`${path}/img/community_icon1.png`} alt='' />
					<p>MY ACCOUNT</p>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
						provident?
					</span>
				</li>
				<li>
					<img src={`${path}/img/community_icon2.png`} alt='' />
					<p>INTERNATIONAL</p>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
						provident?
					</span>
				</li>
				<li>
					<img src={`${path}/img/community_icon3.png`} alt='' />
					<p>PRIVACY</p>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
						provident?
					</span>
				</li>
				<li>
					<img src={`${path}/img/community_icon4.png`} alt='' />
					<p>CONNECT</p>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
						provident?
					</span>
				</li>
			</ul>
			<div className='inputBox'>
				<input type='text' placeholder='Please enter title' ref={input} />
				<br />
				<textarea
					cols='30'
					rows='5'
					placeholder='Please enter description'
					ref={textarea}></textarea>
				<br />
				<div className='btnSet'>
					<button onClick={resetForm}>CANCEL</button>
					<button onClick={createPost}>WRITE</button>
				</div>
			</div>

			<div className='showBox'>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							{post.enableUpdate ? (
								<>
									<div className='editTxt'>
										<input
											type='text'
											defaultValue={post.title}
											ref={inputEdit}
										/>
										<br />
										<textarea
											cols='30'
											rows='4'
											defaultValue={post.content}
											ref={textareaEdit}></textarea>
										<br />
									</div>
									<div className='btnSet'>
										<button onClick={() => disableUpdate(idx)}>CANCEL</button>
										<button onClick={() => updatePost(idx)}>UPDATE</button>
									</div>
								</>
							) : (
								<>
									<div className='txt'>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</div>

									<div className='btnSet'>
										<button onClick={() => enableUpdate(idx)}>EDIT</button>
										<button onClick={() => deletePost(idx)}>DELELTE</button>
									</div>
								</>
							)}
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
