var test = {"uid":"9051671705848-7","reportElements":[{"title":" DB get code","message":null,"status":"success","type":"step","time":"10:47:41:"},{"title":" 1951","message":null,"status":"success","type":"regular","time":"10:47:41:"},{"title":" Appium is back","message":null,"status":"success","type":"step","time":"10:47:41:"},{"title":" type code","message":null,"status":"success","type":"step","time":"10:47:41:"},{"title":" Failed to insert code","message":null,"status":"success","type":"regular","time":"10:48:42:"},{"title":" Fail: Expected condition failed: waiting for presence of element located by: By.AccessibilityId: passcode_checker_container (tried for 60 second(s) with 500 milliseconds interval)","message":"java.lang.Exception\n\tat MSK_APP._Appium.Exception(_Appium.java:273)\n\tat MSK_APP.Test.VarificationCode.Enter_code(VarificationCode.java:56)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.junit.internal.runners.TestMethod.invoke(TestMethod.java:66)\n\tat org.junit.internal.runners.MethodRoadie.runTestMethod(MethodRoadie.java:105)\n\tat org.junit.internal.runners.MethodRoadie$2.run(MethodRoadie.java:86)\n\tat org.junit.internal.runners.MethodRoadie.runBeforesThenTestThenAfters(MethodRoadie.java:94)\n\tat org.junit.internal.runners.MethodRoadie.runTest(MethodRoadie.java:84)\n\tat org.junit.internal.runners.MethodRoadie.run(MethodRoadie.java:49)\n\tat org.junit.internal.runners.JUnit4ClassRunner.invokeTestMethod(JUnit4ClassRunner.java:98)\n\tat org.junit.internal.runners.JUnit4ClassRunner.runMethods(JUnit4ClassRunner.java:61)\n\tat org.junit.internal.runners.JUnit4ClassRunner$1.run(JUnit4ClassRunner.java:54)\n\tat org.junit.internal.runners.ClassRoadie.runUnprotected(ClassRoadie.java:34)\n\tat org.junit.internal.runners.ClassRoadie.runProtected(ClassRoadie.java:44)\n\tat org.junit.internal.runners.JUnit4ClassRunner.run(JUnit4ClassRunner.java:52)\n\tat junit.framework.JSystemJUnit4ClassRunner.run(JSystemJUnit4ClassRunner.java:250)\n\tat junit.framework.JUnit4TestAdapterForJSystem.run(JUnit4TestAdapterForJSystem.java:86)\n\tat com.aqua.anttask.jsystem.JUnitTestRunner.run(JUnitTestRunner.java:461)\n\tat com.aqua.anttask.jsystem.JSystemTask.executeInVM(JSystemTask.java:1388)\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:957)\n\tat com.aqua.anttask.jsystem.JSystemTask.executeOrQueue(JSystemTask.java:1806)\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:897)\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\n\tat org.apache.tools.ant.Project.executeTarget(Project.java:1298)\n\tat org.jsystemtest.plugin.JSystemMojo.executeSingleScenario(JSystemMojo.java:167)\n\tat org.jsystemtest.plugin.JSystemMojo.execute(JSystemMojo.java:132)\n\tat org.apache.maven.plugin.DefaultBuildPluginManager.executeMojo(DefaultBuildPluginManager.java:137)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:210)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:156)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:148)\n\tat org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:117)\n\tat org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:81)\n\tat org.apache.maven.lifecycle.internal.builder.singlethreaded.SingleThreadedBuilder.build(SingleThreadedBuilder.java:56)\n\tat org.apache.maven.lifecycle.internal.LifecycleStarter.execute(LifecycleStarter.java:128)\n\tat org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:305)\n\tat org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:192)\n\tat org.apache.maven.DefaultMaven.execute(DefaultMaven.java:105)\n\tat org.apache.maven.cli.MavenCli.execute(MavenCli.java:957)\n\tat org.apache.maven.cli.MavenCli.doMain(MavenCli.java:289)\n\tat org.apache.maven.cli.MavenCli.main(MavenCli.java:193)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.launchEnhanced(Launcher.java:282)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.launch(Launcher.java:225)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.mainWithExitCode(Launcher.java:406)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.main(Launcher.java:347)\n","status":"failure","type":"regular","time":"10:48:42:"},{"title":"Thu Dec 22 104842 UTC 2022.png","message":"Thu Dec 22 104842 UTC 2022.png","status":"success","type":"img","time":"10:48:42"},{"title":"Thu Dec 22 104843 UTC 2022.mp4","message":"Thu Dec 22 104843 UTC 2022.mp4","status":"success","type":"lnk","time":"10:48:43"},{"title":"Start time: Thu Dec 22 10:47:40 UTC 2022","message":null,"status":"success","type":"regular","time":"10:48:43"},{"title":"End time  : Thu Dec 22 10:48:43 UTC 2022","message":null,"status":"success","type":"regular","time":"10:48:43"},{"title":"Test running time: 62 sec.","message":null,"status":"success","type":"regular","time":"10:48:43"},{"title":" Fail report was submitted","message":"junit.framework.AssertionFailedError: Fail report was submitted\n\tat junit.framework.JSystemJUnit4ClassRunner.jsystemEndTest(JSystemJUnit4ClassRunner.java:212)\n\tat junit.framework.JSystemJUnit4ClassRunner.access$100(JSystemJUnit4ClassRunner.java:31)\n\tat junit.framework.JSystemJUnit4ClassRunner$TestListenerAdapter.testFinished(JSystemJUnit4ClassRunner.java:165)\n\tat org.junit.runner.notification.RunNotifier$7.notifyListener(RunNotifier.java:145)\n\tat org.junit.runner.notification.RunNotifier$SafeNotifier.run(RunNotifier.java:41)\n\tat org.junit.runner.notification.RunNotifier.fireTestFinished(RunNotifier.java:142)\n\tat org.junit.internal.runners.MethodRoadie.run(MethodRoadie.java:51)\n\tat org.junit.internal.runners.JUnit4ClassRunner.invokeTestMethod(JUnit4ClassRunner.java:98)\n\tat org.junit.internal.runners.JUnit4ClassRunner.runMethods(JUnit4ClassRunner.java:61)\n\tat org.junit.internal.runners.JUnit4ClassRunner$1.run(JUnit4ClassRunner.java:54)\n\tat org.junit.internal.runners.ClassRoadie.runUnprotected(ClassRoadie.java:34)\n\tat org.junit.internal.runners.ClassRoadie.runProtected(ClassRoadie.java:44)\n\tat org.junit.internal.runners.JUnit4ClassRunner.run(JUnit4ClassRunner.java:52)\n\tat junit.framework.JSystemJUnit4ClassRunner.run(JSystemJUnit4ClassRunner.java:250)\n\tat junit.framework.JUnit4TestAdapterForJSystem.run(JUnit4TestAdapterForJSystem.java:86)\n\tat com.aqua.anttask.jsystem.JUnitTestRunner.run(JUnitTestRunner.java:461)\n\tat com.aqua.anttask.jsystem.JSystemTask.executeInVM(JSystemTask.java:1388)\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:957)\n\tat com.aqua.anttask.jsystem.JSystemTask.executeOrQueue(JSystemTask.java:1806)\n\tat com.aqua.anttask.jsystem.JSystemTask.execute(JSystemTask.java:897)\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\n\tat org.apache.tools.ant.helper.SingleCheckExecutor.executeTargets(SingleCheckExecutor.java:38)\n\tat org.apache.tools.ant.Project.executeTargets(Project.java:1181)\n\tat org.apache.tools.ant.taskdefs.Ant.execute(Ant.java:416)\n\tat net.sf.antcontrib.logic.AntCallBack.execute(AntCallBack.java:54)\n\tat org.apache.tools.ant.UnknownElement.execute(UnknownElement.java:288)\n\tat sun.reflect.GeneratedMethodAccessor36.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.tools.ant.dispatch.DispatchUtils.execute(DispatchUtils.java:105)\n\tat org.apache.tools.ant.Task.perform(Task.java:348)\n\tat org.apache.tools.ant.Target.execute(Target.java:357)\n\tat org.apache.tools.ant.Target.performTasks(Target.java:385)\n\tat org.apache.tools.ant.Project.executeSortedTargets(Project.java:1329)\n\tat org.apache.tools.ant.Project.executeTarget(Project.java:1298)\n\tat org.jsystemtest.plugin.JSystemMojo.executeSingleScenario(JSystemMojo.java:167)\n\tat org.jsystemtest.plugin.JSystemMojo.execute(JSystemMojo.java:132)\n\tat org.apache.maven.plugin.DefaultBuildPluginManager.executeMojo(DefaultBuildPluginManager.java:137)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:210)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:156)\n\tat org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:148)\n\tat org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:117)\n\tat org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:81)\n\tat org.apache.maven.lifecycle.internal.builder.singlethreaded.SingleThreadedBuilder.build(SingleThreadedBuilder.java:56)\n\tat org.apache.maven.lifecycle.internal.LifecycleStarter.execute(LifecycleStarter.java:128)\n\tat org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:305)\n\tat org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:192)\n\tat org.apache.maven.DefaultMaven.execute(DefaultMaven.java:105)\n\tat org.apache.maven.cli.MavenCli.execute(MavenCli.java:957)\n\tat org.apache.maven.cli.MavenCli.doMain(MavenCli.java:289)\n\tat org.apache.maven.cli.MavenCli.main(MavenCli.java:193)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.launchEnhanced(Launcher.java:282)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.launch(Launcher.java:225)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.mainWithExitCode(Launcher.java:406)\n\tat org.codehaus.plexus.classworlds.launcher.Launcher.main(Launcher.java:347)\n","status":"failure","type":"regular","time":"10:48:43:"}]};