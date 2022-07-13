import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';

function Community() {
	const dummyPosts = [
		{ title: '1', content: 'a' },
		{ title: '2', content: 'b' },
		{ title: '3', content: 'c' },
		{ title: '4', content: 'd' },
		{ title: '5', content: 'e' },
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

	//수정모드가 열렸을 때 다른 수정 버튼을 누르더라도 수정이 되지 않도록 해야 하는데
	//이렇게 하려며 allowed라는 어떤 state를 하나 만들어서
	//그 값이 true일 때만 이 edit를 눌렀을 때 열리도록
	//어떤 state값을 추가로 하나 만들어서
	//내가 만약 edit을 눌러서 현재 수정 모드로 바뀌어 있으면
	//그 state 값을 false, true 이렇게 지정을 해서 그 값이 true일 때만 edit 이벤트가 발생하도록 만들어 보자
	useEffect(() => {
		console.log(Posts);
	}, [Posts]);

	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<input type='text' placeholder='제목을 입력하세요' ref={input} />
				<br />
				<textarea
					cols='30'
					rows='5'
					placeholder='본문을 입력하세요 '
					ref={textarea}></textarea>
				<br />

				<button onClick={resetForm}>CANCEL</button>
				<button onClick={createPost}>WRITE</button>
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
