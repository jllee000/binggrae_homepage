import classNames from 'classnames/bind';
import styles from './input.module.scss';
const cx = classNames.bind(styles);

const InputPatternLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
    <path
      d="M12.1175 17.6537C12.3243 17.6366 12.5427 17.5723 12.7196 17.4546C12.8965 17.337 13.0437 17.1779 13.1496 17.0128C13.2554 16.8477 13.3258 16.6706 13.3844 16.5054C13.4897 16.163 13.5418 15.8145 13.5645 15.4837C13.5701 15.3951 13.5699 15.3124 13.5696 15.2297L13.5752 15.1056L13.5748 14.9756L13.5622 14.7156L13.5259 14.4555C13.5259 14.4555 13.5139 14.3727 13.5078 14.3314L13.4779 14.2072C13.4599 14.1185 13.4478 14.0357 13.424 13.9529C13.3762 13.7874 13.3284 13.6218 13.2629 13.4621C13.0306 12.8173 12.6625 12.2372 12.2591 11.7042C12.1405 11.562 12.0337 11.4199 11.9092 11.2836C12.0034 11.1775 12.0917 11.0773 12.1859 10.9713C12.398 10.7474 12.6219 10.5354 12.8517 10.3293C12.9636 10.2173 13.0815 10.1231 13.2053 10.0231C13.3232 9.92888 13.4469 9.82883 13.5648 9.73465L13.9421 9.45217C14.0718 9.35802 14.1956 9.26976 14.3194 9.16969C14.3194 9.16969 14.3312 9.15791 14.3371 9.15201C14.3666 9.1462 14.3961 9.11673 14.4019 9.08721C14.4136 9.03997 14.3957 8.99857 14.3602 8.97483C14.0879 8.80857 13.8215 8.63641 13.5669 8.45247C13.4366 8.35754 13.3181 8.26264 13.1879 8.16771C13.0635 8.06689 12.9391 7.96605 12.8206 7.85934C12.4711 7.55694 12.1392 7.2487 11.8428 6.9051C11.9017 6.8462 11.9488 6.78725 12.0018 6.72242C12.0607 6.66351 12.1077 6.59276 12.1607 6.52792C12.2137 6.46309 12.2667 6.39824 12.3137 6.32748L12.4667 6.12707C12.5138 6.0563 12.5609 5.98555 12.6079 5.91479C12.7079 5.7792 12.7902 5.62579 12.8725 5.48424C12.9136 5.40755 12.9548 5.33088 12.99 5.26008L13.0487 5.14206L13.1016 5.02997L13.2072 4.79395L13.2951 4.55196C13.2951 4.55196 13.3244 4.47524 13.3361 4.42801L13.3771 4.30404C13.4005 4.22139 13.4238 4.13875 13.4472 4.0561C13.4881 3.88487 13.523 3.71953 13.5402 3.53642C13.5692 3.36515 13.5687 3.1879 13.58 3.01068C13.5854 2.83935 13.5789 2.66796 13.5607 2.49656C13.536 2.15378 13.4818 1.80501 13.3507 1.4501C13.2911 1.27266 13.2078 1.09514 13.0891 0.917521C12.9763 0.74583 12.8104 0.579912 12.6092 0.461131C12.4079 0.342351 12.1773 0.276649 11.9527 0.264153C11.7281 0.251658 11.5273 0.286487 11.3325 0.339077C11.2381 0.362425 11.1436 0.3976 11.0551 0.438693C11.0079 0.462184 10.9666 0.479795 10.9194 0.503287C10.8663 0.532669 10.8309 0.556206 10.7779 0.585588C10.6068 0.697335 10.4477 0.832736 10.3123 0.99186C10.0532 1.29833 9.88889 1.65236 9.77768 2.00063C9.66646 2.3489 9.60845 2.70325 9.57996 3.05177C9.56275 3.22307 9.55147 3.40029 9.55793 3.58347C9.55229 3.67209 9.56438 3.76666 9.57056 3.8553L9.57689 3.99121L9.59502 4.12717C9.63747 4.48772 9.72716 4.8366 9.84637 5.17966C10.0728 5.80666 10.4172 6.37494 10.8323 6.87252C10.7086 6.99622 10.579 7.114 10.4493 7.23178C10.2195 7.43788 9.97784 7.63214 9.73617 7.8264C9.48858 8.01473 9.23507 8.19712 8.97563 8.3736C8.8577 8.45596 8.73386 8.53241 8.6159 8.60295C8.30215 8.40702 7.97068 8.21694 7.63926 8.03868C7.56825 8.00301 7.49132 7.96143 7.40849 7.92573L7.18957 7.8246C7.04166 7.75916 6.88781 7.68781 6.7399 7.62237C6.43226 7.49145 6.11876 7.37821 5.7994 7.28271C5.48005 7.18721 5.14895 7.11532 4.81788 7.05523C4.48093 7.00104 4.14996 6.97639 3.81315 6.96947C3.47634 6.96254 3.13372 6.98516 2.79123 7.05502C2.61997 7.08405 2.44873 7.12489 2.28347 7.18348C2.11228 7.23614 1.94707 7.30654 1.7878 7.39468C1.64624 7.47698 1.28046 7.66495 0.962573 8.05395C0.691774 8.38402 0.438614 8.6846 0.469354 9.08058C0.494203 9.48244 0.79056 9.79056 1.0217 10.0217C1.18764 10.1876 1.3594 10.3241 1.42452 10.3656C1.56665 10.4724 1.70875 10.5674 1.87444 10.6506C2.1999 10.8111 2.54289 10.9067 2.87988 10.9727C3.22277 11.0328 3.56553 11.0575 3.90231 11.0526C4.57586 11.0428 5.24912 10.9385 5.89258 10.7455C6.21136 10.6519 6.53008 10.5347 6.83694 10.4056C6.98446 10.3411 7.1438 10.2765 7.28539 10.2061L7.3916 10.1591C7.3916 10.1591 7.47422 10.1239 7.5096 10.1004C7.58629 10.0593 7.65709 10.024 7.72788 9.98878C8.02874 9.83016 8.32958 9.65973 8.62448 9.48336C8.7192 9.54273 8.81394 9.61393 8.90865 9.6733C9.42376 10.0235 9.92127 10.4149 10.3893 10.824C10.5078 10.9308 10.6203 11.0315 10.727 11.1382C10.7922 11.2034 10.8633 11.2745 10.9285 11.3397C10.5459 11.829 10.2227 12.3893 10.0177 12.9973C9.90641 13.3219 9.83655 13.6644 9.80213 14.007C9.78492 14.1783 9.77363 14.3555 9.78006 14.5269C9.78649 14.6983 9.79292 14.8697 9.81117 15.0411C9.84766 15.3839 9.91367 15.7209 10.021 16.0521C10.1343 16.3892 10.3008 16.7206 10.5498 17.0049C10.6743 17.153 10.8224 17.2776 10.9881 17.3726C11.0769 17.426 11.1597 17.4617 11.2485 17.5034C11.3313 17.5391 11.42 17.5689 11.5147 17.5928C11.698 17.6466 11.8989 17.6708 12.0998 17.6596L12.1175 17.6537ZM11.3801 6.28922C11.2436 6.10564 11.1189 5.91028 11.012 5.70906C10.8634 5.44272 10.7326 5.15871 10.6313 4.86888C10.5299 4.57905 10.4641 4.28935 10.4277 3.98199L10.4096 3.86965L10.4034 3.75737C10.3972 3.68053 10.397 3.60965 10.3909 3.53281C10.3904 3.37919 10.3959 3.2315 10.4072 3.07791C10.4359 2.77665 10.4823 2.48136 10.57 2.20392C10.6578 1.92648 10.7811 1.67276 10.9519 1.46647C11.0402 1.36629 11.1345 1.28386 11.2406 1.21328C11.3409 1.14859 11.4648 1.09579 11.5888 1.05481C11.7186 1.01975 11.8368 0.996478 11.955 1.00865C12.0672 1.0149 12.1678 1.04474 12.2625 1.09229C12.4341 1.19326 12.5825 1.41231 12.666 1.67255C12.7613 1.93281 12.8095 2.22841 12.834 2.52391C12.8404 2.67165 12.8526 2.8253 12.8472 2.973C12.8417 3.1207 12.8422 3.26252 12.8131 3.41014C12.8017 3.55192 12.7608 3.6995 12.7375 3.84123C12.7259 3.9121 12.7025 3.98294 12.6791 4.05378L12.644 4.16002C12.644 4.16002 12.6206 4.23085 12.6088 4.26627L12.5326 4.47284L12.4446 4.67938L12.3977 4.78559L12.3448 4.88587C12.3096 4.95666 12.2743 5.01566 12.2391 5.08646C12.1567 5.2162 12.0862 5.34597 11.998 5.46978C11.9568 5.53465 11.9156 5.59951 11.8686 5.65845L11.7332 5.84123C11.692 5.9061 11.639 5.95911 11.5919 6.01805C11.5389 6.07107 11.4978 6.13593 11.4507 6.19488C11.4271 6.21844 11.4035 6.24202 11.38 6.26558L11.3801 6.28922ZM7.11506 8.58661C7.18014 8.61635 7.25114 8.652 7.32215 8.68767C7.51744 8.78871 7.71278 8.90157 7.9081 9.01443C7.73706 9.11436 7.56008 9.20835 7.389 9.29646C7.3182 9.3317 7.2474 9.36694 7.18249 9.39629C7.153 9.41393 7.11758 9.42563 7.08809 9.44327L6.97601 9.4961C6.82849 9.56065 6.69278 9.62523 6.54526 9.68978C6.262 9.80709 5.97282 9.91849 5.68356 10.0062C5.10504 10.1818 4.49675 10.2804 3.89411 10.2904C3.59278 10.2954 3.29142 10.2885 3.00177 10.2463C2.71212 10.2041 2.43416 10.1264 2.17386 10.0193C2.04962 9.96573 1.92532 9.88854 1.801 9.81135C1.68258 9.72827 1.56415 9.64518 1.4634 9.54443C1.35083 9.44365 1.25597 9.337 1.14929 9.23033C1.04255 9.10002 1.03609 8.91685 1.13616 8.79307C1.23034 8.67519 1.32454 8.5691 1.43058 8.46306C1.63087 8.26278 1.86668 8.08623 2.12038 7.96291C2.36819 7.84549 2.64567 7.76954 2.93507 7.72905C3.22447 7.68856 3.53169 7.67767 3.82716 7.69038C4.12852 7.6972 4.42994 7.72764 4.72552 7.77581C5.0211 7.82397 5.31676 7.89577 5.60655 7.98527C5.89634 8.07478 6.18028 8.182 6.47018 8.30695C6.61216 8.36647 6.74826 8.43186 6.89617 8.4973L7.11509 8.5984L7.11506 8.58661ZM11.4409 10.7681C11.3816 10.7089 11.3164 10.6437 11.2571 10.5844C11.1386 10.4659 11.026 10.3533 10.8957 10.2465C10.404 9.81371 9.88278 9.41034 9.34396 9.03647C9.34396 9.03647 9.33804 9.03055 9.33212 9.02463C9.35568 9.00106 9.39699 8.98346 9.42648 8.96582C9.69771 8.77756 9.95711 8.58927 10.2165 8.38916C10.4759 8.18905 10.7293 7.98303 10.9768 7.75925C11.1123 7.63557 11.2478 7.5119 11.3715 7.38819C11.4723 7.48894 11.5789 7.57198 11.6796 7.66091C11.9402 7.87441 12.2186 8.07024 12.4968 8.24244C12.7691 8.42052 13.0533 8.59864 13.355 8.74727C13.503 8.82452 13.6509 8.90177 13.8048 8.96133C13.8639 8.98514 13.929 9.01488 13.9941 9.0328C13.457 9.22616 12.9616 9.54374 12.4958 9.8673C12.2246 10.0556 11.9711 10.2616 11.7177 10.4794C11.6234 10.5737 11.5292 10.6679 11.4349 10.7622L11.4409 10.7681ZM12.0502 16.8913C11.9557 16.891 11.8434 16.8729 11.7369 16.8372C11.6837 16.8193 11.6245 16.7955 11.5654 16.7717C11.5121 16.742 11.4529 16.7182 11.4233 16.6885C11.3286 16.6292 11.2456 16.558 11.1685 16.4691C11.0203 16.2973 10.8955 16.0665 10.8061 15.8004C10.7226 15.5401 10.6627 15.2563 10.6322 14.9667C10.6141 14.8189 10.6077 14.6712 10.6073 14.5294C10.6009 14.3817 10.6123 14.2399 10.6237 14.0981C10.6465 13.8146 10.7106 13.5253 10.7925 13.2419C10.9387 12.7637 11.1737 12.3036 11.456 11.879C11.5331 11.9679 11.5984 12.0567 11.6754 12.1455C12.0432 12.6312 12.3698 13.1462 12.5605 13.7022C12.6141 13.8383 12.65 13.9802 12.6977 14.1221C12.7216 14.1931 12.7336 14.264 12.7456 14.335L12.7696 14.4414C12.7696 14.4414 12.7816 14.5124 12.7817 14.5478L12.806 14.7606L12.8126 14.9792L12.8188 15.0915L12.8132 15.2037C12.8134 15.2746 12.8078 15.3514 12.8021 15.4282C12.7852 15.7177 12.7389 16.013 12.6569 16.2728C12.6159 16.3967 12.5631 16.5206 12.5043 16.615C12.4396 16.7152 12.3689 16.7859 12.2923 16.827C12.2215 16.8741 12.1389 16.8975 12.0443 16.8972L12.0502 16.8913Z"
      fill="white"
    />
  </svg>
);

const InputPatternRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
    <path
      d="M2.88247 0.346283C2.67572 0.363384 2.45731 0.427717 2.2804 0.545354C2.1035 0.662993 1.95628 0.822081 1.85042 0.987202C1.74456 1.15232 1.67418 1.32936 1.61559 1.49463C1.51027 1.83701 1.45817 2.18546 1.43553 2.51628C1.42989 2.60489 1.43014 2.68761 1.43039 2.77033L1.42485 2.89441L1.42524 3.02438L1.43784 3.28442L1.47407 3.54451C1.47407 3.54451 1.48614 3.62726 1.49217 3.66864L1.5221 3.7928C1.5401 3.88149 1.55216 3.96426 1.57605 4.04705C1.62382 4.21264 1.67158 4.37821 1.73706 4.53795C1.96944 5.18269 2.33753 5.76283 2.74093 6.29582C2.85953 6.43799 2.96633 6.58013 3.09082 6.7164C2.9966 6.82247 2.90828 6.92265 2.81406 7.02872C2.60203 7.25261 2.37812 7.46464 2.14831 7.67075C2.03638 7.78268 1.91851 7.87687 1.79473 7.97694C1.67684 8.07112 1.55305 8.17117 1.43516 8.26535L1.05788 8.54783C0.92817 8.64198 0.804365 8.73024 0.680587 8.83031C0.680587 8.83031 0.668806 8.84209 0.662915 8.84799C0.63339 8.8538 0.603926 8.88327 0.598107 8.91279C0.586432 8.96003 0.604269 9.00143 0.639793 9.02517C0.912092 9.19143 1.17852 9.36359 1.43314 9.54753C1.56342 9.64246 1.68187 9.73736 1.81215 9.83229C1.93653 9.93311 2.06091 10.0339 2.17941 10.1407C2.52893 10.4431 2.86076 10.7513 3.15723 11.0949C3.09832 11.1538 3.05122 11.2127 2.99824 11.2776C2.93933 11.3365 2.89228 11.4072 2.8393 11.4721C2.78632 11.5369 2.73333 11.6018 2.68627 11.6725L2.53325 11.8729C2.48619 11.9437 2.43915 12.0144 2.39209 12.0852C2.29205 12.2208 2.20979 12.3742 2.1275 12.5158C2.08637 12.5925 2.04525 12.6691 2.01001 12.7399L1.95128 12.8579L1.89844 12.97L1.79279 13.2061L1.70489 13.448C1.70489 13.448 1.67559 13.5248 1.66392 13.572L1.62293 13.696C1.59955 13.7786 1.57616 13.8613 1.55278 13.9439C1.51194 14.1151 1.47696 14.2805 1.45979 14.4636C1.43077 14.6348 1.43132 14.8121 1.42003 14.9893C1.41464 15.1607 1.42107 15.332 1.43931 15.5034C1.46398 15.8462 1.51822 16.195 1.64928 16.5499C1.7089 16.7273 1.79216 16.9049 1.91087 17.0825C2.02365 17.2542 2.18959 17.4201 2.39085 17.5389C2.5921 17.6576 2.82272 17.7234 3.04729 17.7358C3.27185 17.7483 3.47265 17.7135 3.66748 17.6609C3.76195 17.6376 3.85638 17.6024 3.94488 17.5613C3.99208 17.5378 4.0334 17.5202 4.08059 17.4967C4.13368 17.4673 4.16906 17.4438 4.22215 17.4144C4.39316 17.3027 4.55229 17.1673 4.6877 17.0081C4.94676 16.7017 5.11111 16.3476 5.22232 15.9994C5.33354 15.6511 5.39155 15.2968 5.42004 14.9482C5.43725 14.7769 5.44853 14.5997 5.44207 14.4165C5.44771 14.3279 5.43562 14.2333 5.42944 14.1447L5.42311 14.0088L5.40498 13.8728C5.36253 13.5123 5.27284 13.1634 5.15363 12.8203C4.92721 12.1933 4.58279 11.6251 4.16768 11.1275C4.29139 11.0038 4.42103 10.886 4.55067 10.7682C4.78048 10.5621 5.02216 10.3679 5.26383 10.1736C5.51142 9.98527 5.76493 9.80288 6.02437 9.6264C6.1423 9.54404 6.26614 9.46759 6.3841 9.39705C6.69785 9.59298 7.02932 9.78306 7.36074 9.96132C7.43175 9.99699 7.50868 10.0386 7.59151 10.0743L7.81043 10.1754C7.95834 10.2408 8.11219 10.3122 8.2601 10.3776C8.56774 10.5086 8.88124 10.6218 9.2006 10.7173C9.51995 10.8128 9.85105 10.8847 10.1821 10.9448C10.5191 10.999 10.85 11.0236 11.1868 11.0305C11.5237 11.0375 11.8663 11.0148 12.2088 10.945C12.38 10.916 12.5513 10.8751 12.7165 10.8165C12.8877 10.7639 13.0529 10.6935 13.2122 10.6053C13.3538 10.523 13.7195 10.3351 14.0374 9.94605C14.3082 9.61598 14.5614 9.3154 14.5306 8.91942C14.5058 8.51756 14.2094 8.20944 13.9783 7.97831C13.8124 7.81236 13.6406 7.67594 13.5755 7.63438C13.4334 7.52759 13.2913 7.43264 13.1256 7.34942C12.8001 7.1889 12.4571 7.0933 12.1201 7.02729C11.7772 6.96717 11.4345 6.94249 11.0977 6.94739C10.4241 6.95717 9.75088 7.06151 9.10742 7.25455C8.78864 7.34812 8.46992 7.46532 8.16306 7.59438C8.01554 7.65893 7.8562 7.72346 7.71461 7.79394L7.6084 7.84086C7.6084 7.84086 7.52578 7.87608 7.4904 7.89961C7.41371 7.94074 7.34291 7.97598 7.27212 8.01122C6.97126 8.16984 6.67042 8.34027 6.37552 8.51664C6.2808 8.45727 6.18606 8.38607 6.09135 8.3267C5.57624 7.97654 5.07873 7.58506 4.61071 7.17595C4.49222 7.06924 4.37966 6.96845 4.27299 6.86178C4.20779 6.79659 4.13668 6.72547 4.07149 6.66028C4.45407 6.17102 4.77734 5.61068 4.98231 5.00271C5.09359 4.67807 5.16345 4.33557 5.19787 3.99297C5.21508 3.82167 5.22637 3.64447 5.21994 3.4731C5.21351 3.30173 5.20708 3.13034 5.18883 2.95894C5.15234 2.61613 5.08633 2.27914 4.97897 1.94793C4.86569 1.6108 4.69924 1.27942 4.45022 0.995057C4.32569 0.846965 4.1776 0.72244 4.01187 0.627402C3.92308 0.573955 3.84027 0.538253 3.75152 0.496625C3.66869 0.460922 3.57996 0.431097 3.48535 0.407176C3.30202 0.353445 3.10106 0.329212 2.9002 0.340422L2.88247 0.346283ZM3.61994 11.7108C3.7564 11.8944 3.88108 12.0897 3.98805 12.2909C4.13657 12.5573 4.26741 12.8413 4.36873 13.1311C4.47005 13.421 4.53592 13.7107 4.5723 14.018L4.59036 14.1304L4.59662 14.2426C4.60276 14.3195 4.60297 14.3904 4.60911 14.4672C4.60957 14.6208 4.60411 14.7685 4.59276 14.9221C4.56412 15.2233 4.51775 15.5186 4.42996 15.7961C4.34217 16.0735 4.21886 16.3272 4.04813 16.5335C3.9598 16.6337 3.86552 16.7161 3.75938 16.7867C3.65913 16.8514 3.53521 16.9042 3.41125 16.9452C3.28137 16.9803 3.16325 17.0035 3.04504 16.9913C2.93276 16.9851 2.83223 16.9553 2.73755 16.9077C2.56589 16.8067 2.41752 16.5877 2.33401 16.3275C2.23869 16.0672 2.19052 15.7716 2.166 15.4761C2.15964 15.3284 2.14737 15.1747 2.15283 15.027C2.15829 14.8793 2.15784 14.7375 2.18694 14.5899C2.19833 14.4481 2.23925 14.3005 2.26245 14.1588C2.27406 14.0879 2.29748 14.0171 2.3209 13.9462L2.35603 13.84C2.35603 13.84 2.37945 13.7692 2.39116 13.7337L2.46737 13.5272L2.55537 13.3206L2.60229 13.2144L2.65518 13.1141C2.69042 13.0433 2.72569 12.9843 2.76093 12.9135C2.84325 12.7838 2.91377 12.654 3.00202 12.5302C3.04319 12.4653 3.08435 12.4005 3.13144 12.3415L3.2668 12.1588C3.30796 12.0939 3.36097 12.0409 3.40806 11.9819C3.46108 11.9289 3.50224 11.8641 3.54933 11.8051C3.57289 11.7816 3.59647 11.758 3.62003 11.7344L3.61994 11.7108ZM7.88494 9.41339C7.81986 9.38365 7.74886 9.348 7.67785 9.31233C7.48256 9.21129 7.28722 9.09843 7.0919 8.98557C7.26294 8.88564 7.43992 8.79165 7.611 8.70354C7.6818 8.6683 7.7526 8.63306 7.81751 8.60371C7.847 8.58607 7.88242 8.57437 7.91191 8.55673L8.02399 8.5039C8.17151 8.43935 8.30722 8.37477 8.45474 8.31022C8.738 8.19291 9.02718 8.08151 9.31644 7.99375C9.89496 7.81824 10.5032 7.71962 11.1059 7.70963C11.4072 7.70463 11.7086 7.71145 11.9982 7.75369C12.2879 7.79592 12.5658 7.87358 12.8261 7.98072C12.9504 8.03427 13.0747 8.11146 13.199 8.18865C13.3174 8.27173 13.4358 8.35482 13.5366 8.45557C13.6492 8.55635 13.744 8.663 13.8507 8.76967C13.9575 8.89998 13.9639 9.08315 13.8638 9.20693C13.7697 9.32481 13.6755 9.4309 13.5694 9.53694C13.3691 9.73722 13.1333 9.91377 12.8796 10.0371C12.6318 10.1545 12.3543 10.2305 12.0649 10.2709C11.7755 10.3114 11.4683 10.3223 11.1728 10.3096C10.8715 10.3028 10.5701 10.2724 10.2745 10.2242C9.9789 10.176 9.68324 10.1042 9.39345 10.0147C9.10366 9.92522 8.81972 9.818 8.52982 9.69305C8.38784 9.63353 8.25174 9.56814 8.10383 9.5027L7.88491 9.4016L7.88494 9.41339ZM3.55915 7.23187C3.61841 7.29113 3.6836 7.35632 3.74287 7.41559C3.8614 7.53412 3.97399 7.64673 4.10431 7.75347C4.59603 8.18629 5.11722 8.58966 5.65604 8.96353C5.65604 8.96353 5.66196 8.96945 5.66788 8.97537C5.64432 8.99894 5.60301 9.01654 5.57352 9.03418C5.30229 9.22244 5.04289 9.41073 4.78351 9.61084C4.52414 9.81095 4.27068 10.017 4.0232 10.2408C3.88767 10.3644 3.75216 10.4881 3.62845 10.6118C3.5277 10.5111 3.4211 10.428 3.32039 10.3391C3.05976 10.1256 2.78144 9.92976 2.50322 9.75756C2.23088 9.57948 1.94674 9.40136 1.64495 9.25273C1.497 9.17548 1.34905 9.09823 1.19525 9.03867C1.13609 9.01486 1.071 8.98512 1.00595 8.9672C1.54305 8.77384 2.03842 8.45626 2.50422 8.1327C2.77545 7.94444 3.0289 7.73842 3.28231 7.52056C3.37657 7.42631 3.47083 7.33205 3.56508 7.2378L3.55915 7.23187ZM2.94978 1.1087C3.04432 1.10899 3.15664 1.12705 3.2631 1.16283C3.31633 1.18071 3.37548 1.20452 3.43464 1.22833C3.48791 1.25803 3.54707 1.28184 3.57671 1.31147C3.67142 1.37084 3.75437 1.44201 3.83145 1.53087C3.97969 1.70267 4.10446 1.93349 4.19389 2.19965C4.2774 2.45988 4.33735 2.74367 4.36777 3.03329C4.38594 3.18106 4.39228 3.32879 4.39271 3.4706C4.39907 3.61833 4.38768 3.76011 4.37629 3.90188C4.35351 4.18543 4.28939 4.47475 4.20752 4.75811C4.06125 5.23627 3.82629 5.69643 3.54396 6.121C3.46688 6.03213 3.40164 5.94332 3.32456 5.85446C2.95676 5.36884 2.63021 4.85378 2.43946 4.29779C2.38587 4.16173 2.34998 4.01982 2.30228 3.87787C2.27844 3.8069 2.26643 3.73597 2.2544 3.66503L2.23042 3.5586C2.23042 3.5586 2.21839 3.48765 2.21829 3.4522L2.19402 3.23942L2.18745 3.02079L2.18119 2.9085L2.18677 2.79625C2.18655 2.72535 2.19222 2.64857 2.1979 2.57178C2.21475 2.2823 2.26113 1.98698 2.34306 1.72725C2.38405 1.60329 2.43686 1.4794 2.49566 1.38504C2.56035 1.28479 2.63105 1.21409 2.70774 1.17296C2.7785 1.1259 2.86114 1.10252 2.95568 1.10281L2.94978 1.1087Z"
      fill="white"
    />
  </svg>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function SubInput({ ...props }: InputProps) {
  return (
    <div className={cx('sub-input')}>
      <InputPatternLeft />
      <input {...props} />
      <InputPatternRight />
    </div>
  );
}

export default SubInput;
